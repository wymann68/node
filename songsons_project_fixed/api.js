const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/generate", async (req, res) => {
    const { lyrics, style } = req.body;
    
    if (!lyrics) {
        return res.status(400).json({ error: "Les paroles sont requises." });
    }
    
    try {
        // Simulation de l'appel API vers le générateur de son
        const audioUrl = `https://example.com/generated-audio/${encodeURIComponent(lyrics)}-${style}.mp3`;
        
        res.json({ success: true, audioUrl });
    } catch (_error) {
        res.status(500).json({ error: "Erreur lors de la génération de la musique." });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur API en cours d'exécution sur le port ${PORT}`);
});