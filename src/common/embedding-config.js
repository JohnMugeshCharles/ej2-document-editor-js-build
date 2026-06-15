let pipe = null;
let transformersModule = null;

// ✅ Lazy load transformers only when required
async function loadTransformers() {
    if (transformersModule) return transformersModule;

    transformersModule = await import(
        'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2'
    );

    const { env } = transformersModule;

    env.localModelPath = "./";
    env.allowRemoteModels = false;

    return transformersModule;
}

async function initializePipeline() {
    const { pipeline } = await loadTransformers();
    pipe = await pipeline("feature-extraction", "models");
    return pipe;
}

// ✅ PUBLIC API (unchanged usage)
window.embeddingModel = async function (description) {
    if (!pipe) {
        pipe = await initializePipeline();
    }

    const output = await pipe(description, {
        pooling: "mean",
        normalize: true,
    });

    return Array.from(output.data);
};

// ✅ No change needed
window.cosineSimilarity = function (vector1, vector2) {
    if (!vector1 || vector1.length !== vector2.length) {
        return 0.0;
    }
    let dotProduct = 0.0;
    let magnitude1 = 0.0;
    let magnitude2 = 0.0;

    for (let i = 0; i < vector1.length; i++) {
        dotProduct += vector1[i] * vector2[i];
        magnitude1 += vector1[i] * vector1[i];
        magnitude2 += vector2[i] * vector2[i];
    }

    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);

    return magnitude1 && magnitude2
        ? dotProduct / (magnitude1 * magnitude2)
        : 0.0;
};