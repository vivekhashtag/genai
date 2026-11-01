import LabPage, { Exercise } from "../_components/LabPage";

const exercises: Exercise[] = [
  {
    num: "0",
    title: "Setup and the data",
    why: "We need a dataset where we know what is true, so we can check whether the audit finds the problem we planted.",
    does: "make_data creates 4,000 synthetic loan applicants with income, credit score, debt ratio, years employed, an informal_work flag and a gender column. It generates two outcomes. repaid is whether the person would really repay and depends only on financial features. approved is the historical decision: the same financial features plus a penalty for women and for informal workers, mimicking a biased past process. Women are also more likely to be in informal work, which makes informal_work a proxy.",
    terms: [
      "Protected attribute: a characteristic such as gender that decisions should not unfairly depend on.",
      "Proxy: a feature that is not itself protected but is correlated with a protected attribute.",
      "Label bias: the training answers (past approvals) are themselves unfair, so a model trained on them learns the unfairness.",
    ],
    expected:
      "The average repaid rate is nearly the same for women and men (about 0.81 to 0.83), but the historical approved rate is clearly lower for women. Informal work is far more common among women.",
    notice:
      "Equal real repayment but unequal approvals is the signature of a biased process, and a model trained to copy the approvals will copy the bias. The data is synthetic with a fixed seed. Using a binary gender column is a simplification, because real audits look at more groups and at intersections.",
    code: `z_fin  = 0.012*(score-650) + 0.9*np.log(income/240000) - 3.0*(debt_ratio-0.3) + 0.04*years
repaid = rng.random(n) < 1/(1+np.exp(-(z_fin + 1.2)))      # truth: financial features only
z_hist = z_fin + 0.6 - 0.8*female - 1.2*informal            # history: biased
approved = rng.random(n) < 1/(1+np.exp(-z_hist))`,
  },
  {
    num: "1",
    title: "Train a baseline model",
    why: "The audit needs a model to audit. We train a standard gradient-boosting classifier to predict the historical approval, which is what a team would do if it trained on its past decisions.",
    does: "Splits the data 70/30 into training and test sets, stratified so both keep the same approval rate, and trains two models. model_full may use gender and model_blind may not. Dropping a protected column is called fairness through unawareness.",
    terms: ["Test set: data the model never saw during training, used for honest measurement."],
    expected: "Two accuracy figures around 0.73 to 0.76, close to each other.",
    notice:
      "Accuracy alone says both models are fine, because it measures how well the model copies the old decisions, including the unfair ones. That is why the next step looks at fairness separately.",
    finance:
      "Many lenders do not feed gender to credit models. Whether that is enough is exactly what this lab tests. Rules on which features may be used differ by country and product, so check with your compliance team before making any real decision.",
    code: `model_full  = GradientBoostingClassifier(random_state=0).fit(X_train, y_train)
model_blind = GradientBoostingClassifier(random_state=0).fit(X_train[BLIND], y_train)`,
  },
  {
    num: "2",
    title: "Measure fairness",
    why: "Fairness has to be measured, and different definitions answer different questions (Module 5, section 4).",
    does: "You write three measures. Selection rate is the share of a group that the model approves. Disparate impact is the protected group's selection rate divided by the reference group's, where below 0.8 is the common red flag (the 80% rule). The equal-opportunity gap compares, among people who really would repay, how often the reference group is approved versus the protected group. It uses the real outcome, not the biased history.",
    terms: [
      "Selection rate: the share of a group that is approved.",
      "Disparate impact ratio: protected selection rate divided by reference selection rate.",
      "Equal-opportunity gap: the difference in true-positive rate between groups.",
    ],
    expected:
      "For the model that uses gender, the disparate impact ratio is below 0.8 (around 0.7) and the equal-opportunity gap is large (around 0.2). With gender removed, both improve but do not disappear: the gap stays clearly above zero.",
    notice:
      "Removing the protected column helped but did not fix the problem, because informal_work carries part of the same signal. That is the proxy problem. The equal-opportunity gap also says something worse than selection rates alone: women who would repay are approved less often.",
    finance:
      "A ratio below 0.8 is not automatically unlawful, and a ratio above 0.8 is not automatically safe. These tests start an investigation, and which measure applies depends on the law and the product (Module 5, section 4).",
    code: `def disparate_impact(pred, group, protected="F", reference="M"):
    # YOUR CODE HERE: selection rate of protected / selection rate of reference
    raise NotImplementedError`,
  },
  {
    num: "3",
    title: "Explain the model with SHAP",
    why: "To see why the model behaves this way. SHAP assigns each feature a contribution to each individual prediction (Module 5, section 3), and averaging the absolute contributions gives a global importance ranking.",
    does: "Computes SHAP values for both models on the test set and ranks features by mean absolute contribution. If the shap package fails to install, the cell falls back to permutation importance, which measures how much accuracy drops when a feature is shuffled. You write rank_of, returning a feature's position in the ranking.",
    terms: [
      "SHAP value: how much one feature pushed one prediction up or down.",
      "Global importance: the average size of those pushes across many predictions.",
    ],
    expected:
      "Credit score ranks first. informal_work ranks surprisingly high, and gender_F has a smaller but non-zero effect in the first model. In the model without gender, informal_work moves up and carries more of the load. Exact values depend on the method (SHAP or permutation) and library versions.",
    notice:
      "That is the proxy at work: the model has found another route to the same information. SHAP explains what the model does, not what is fair. A feature can be important and perfectly legitimate, or important because it carries bias, and judging which is a human decision informed by the fairness measures.",
    finance:
      "SHAP-style reason codes are one way to support adverse-action explanations to applicants (Module 5, section 3).",
    code: `def rank_of(importance, feature):
    # YOUR CODE HERE: 1-based rank of \`feature\` in the ranking
    raise NotImplementedError`,
  },
  {
    num: "4",
    title: "Try a mitigation: reweighing",
    why: "An audit that finds a problem should lead to something being done. We try one pre-processing method from Module 5, section 4.",
    does: "Reweighing gives each training example a weight so that, in the weighted data, group membership and the approval label are statistically independent. Under-approved group and label combinations are weighted up and over-represented ones down, then the model is retrained. The weight is P(g) × P(y) / P(g and y). You write reweighing_weights.",
    terms: ["Pre-processing mitigation: adjusting the training data before the model is trained."],
    expected:
      "A three-row comparison. Reweighing usually moves the disparate impact ratio closer to 1 and shrinks the equal-opportunity gap further, at a small cost in accuracy. Exact numbers depend on library versions.",
    notice:
      "The improvement is real but partial: the gap is smaller, not zero, and that honest result is what goes in the model card along with the trade-off. Treating groups differently when making an individual decision can itself be restricted by law in some places, so involve your legal and compliance teams before choosing a method for real use.",
    code: `def reweighing_weights(group, y):
    # YOUR CODE HERE: weights = P(g) * P(y) / P(g and y) for every row
    raise NotImplementedError`,
  },
  {
    num: "5",
    title: "Write the model card",
    why: "A model card is a short, standard document that records what a model is for, how it was built, how it performs and where it should not be used. Model-risk reviewers and auditors ask for it (Module 5, sections 2 and 6).",
    does: "build_card fills a template with the numbers you just computed, so the card cannot drift out of date with the results. You write the two sections that need human judgement: the limitations and the human-oversight plan. The cell saves the finished card as model_card.md.",
    expected: "The finished card printed, with your two sections filled in, and a file model_card.md saved next to the notebook.",
    notice:
      "Every number in the fairness table came from code you wrote, so a reviewer can re-run it. Notice also what the card has to admit: a residual gap remains, the data is synthetic and one binary attribute is a simplification. A card that hides these is worse than no card. In real work a card is written by the model owner, reviewed independently and updated with every retrain.",
    finance:
      "This is the document a model-validation team or regulator asks for first, and the audit trail behind it (Module 5, sections 2 and 6).",
    code: `limitations = ""   # YOUR CODE HERE: 3-5 specific limitations
oversight = ""     # YOUR CODE HERE: who reviews declined applications,
                   # how often the audit re-runs, what triggers escalation`,
  },
];

export default function Lab5() {
  return (
    <LabPage
      number="5"
      title="Bias Audit & Model Card"
      intro="Audit a credit-approval model for bias, explain it with SHAP, try one mitigation, and write the model card that documents all of it. No API key is needed."
      tags={["60 min", "Fairness metrics", "SHAP", "Model card", "No API key", "Module 5"]}
      notebookFile="lab5_bias_audit_model_card.ipynb"
      safetyNote="The dataset is synthetic. You generate it inside the notebook with a fixed seed, and the generator deliberately builds in bias so that you have something to find. Do not draw conclusions about real people or real lenders from it."
      build="You generate a synthetic loan dataset with planted bias, train a model on the biased history, measure selection rates, the 80% rule and an equal-opportunity gap, look inside the model with SHAP, test whether removing gender is enough (it is not, because of a proxy), try reweighing, and write a model card that reports the results honestly."
      flow={["Synthetic data", "Train model", "Fairness metrics", "SHAP", "Mitigate", "Model card"]}
      read={{ href: "/module5", label: "Module 5", sections: "sections 2 (model risk), 3 (explainability), 4 (bias and fairness) and 6 (audit)" }}
      prerequisites={[
        "Basic Python and pandas. No API key, no paid service and no earlier lab is required.",
        "Runs on free Google Colab or locally. If the shap package will not install, the notebook falls back to permutation importance.",
      ]}
      exercises={exercises}
      stretch={[
        "Add a second protected attribute, such as region, to the generator and check intersectional groups.",
        "Plot approval rate by credit-score band for each gender and look for where the gap is widest.",
        "Write a model card for the Lab 4 research agent instead: intended use, tools, evaluation results and escalation rules.",
        "Try post-processing: choose different decision thresholds per group, then discuss whether that is acceptable in your jurisdiction.",
      ]}
      errors={[
        { term: "NotImplementedError", text: "you have not completed that function yet." },
        { term: "shap fails to install or run", text: "the notebook falls back to permutation importance automatically." },
        { term: "Numbers differ slightly from the expected ranges", text: "library versions can change model internals. The patterns, such as a gap that shrinks but does not vanish, should still hold." },
        { term: "Empty limitations or oversight in the card", text: "you left the placeholders blank. Fill in both strings." },
      ]}
      prev={{ href: "/labs/lab4", label: "Lab 4" }}
      next={{ href: "/labs/lab6", label: "Lab 6" }}
    />
  );
}
