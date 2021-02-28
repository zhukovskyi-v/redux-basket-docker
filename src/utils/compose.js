const compose = (...restFn) => (comp) => {
    return restFn.reduceRight(
        (wrapped, f) => f(wrapped), comp);
};

export default compose;
