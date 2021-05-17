import { decisionType } from '../decisionType';

export { shouldBeTreatedByLabel };

function shouldBeTreatedByLabel(decision: decisionType) {
  return decision.labelStatus === 'toBeTreated' && decision.pseudoText === '';
}
