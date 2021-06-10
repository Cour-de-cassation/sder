import { generateDecision } from './generateDecision';
import { shouldBeTreatedByLabel } from './shouldBeTreatedByLabel';

describe('shouldBeTreatedByLabel', () => {
  it('should return true if the decision is toBeTreated and does not have a speudo text yet', async () => {
    const decision = generateDecision({ labelStatus: 'toBeTreated', pseudoText: '' });

    const result = shouldBeTreatedByLabel(decision);

    expect(result).toEqual(true);
  });

  it('should return false if labelStatus is not toBeTreated', async () => {
    const decision = generateDecision({ labelStatus: 'loaded', pseudoText: '' });

    const result = shouldBeTreatedByLabel(decision);

    expect(result).toEqual(false);
  });

  it('should return false if the pseudo text is not empty', async () => {
    const decision = generateDecision({ labelStatus: 'toBeTreated', pseudoText: 'PSEUDO_TEXT' });

    const result = shouldBeTreatedByLabel(decision);

    expect(result).toEqual(false);
  });
});
