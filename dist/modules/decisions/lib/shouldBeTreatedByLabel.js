export { shouldBeTreatedByLabel };
function shouldBeTreatedByLabel(decision) {
    return decision.labelStatus === 'toBeTreated' && !decision.pseudoText;
}
