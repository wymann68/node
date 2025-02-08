document.getElementById("generate").addEventListener("click", async function() {
    const lyrics = document.getElementById("lyrics").value;
    const style = document.getElementById("musicStyle").value;
    
    if (!lyrics) {
        alert("Veuillez entrer des paroles.");
        return;
    }
    
    try {
        const response = await fetch("https://songsons-api.vercel.app/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lyrics, style })
        });
        
        const data = await response.json();
        document.getElementById("output").innerHTML = `<audio controls><source src="${data.audioUrl}" type="audio/mpeg">Votre navigateur ne supporte pas l'audio</audio>`;
    } catch (error) {
        console.error("Erreur lors de la génération du son", error);
    }
});