window.onload = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            updatearray()
                .then(() => {
                    console.log("Firestore data loaded. Rendering topics...");
                    renderTopics();
                })
                .catch(error => {
                    console.error("Failed to load topics:", error);
                });
        } else {
            console.warn("User not signed in.");
            renderTopics(); // Still render topics, but default values will apply
        }
    });
};

function updatearray() {
    return new Promise((resolve, reject) => {
        // Ensure Firebase is initialized
        if (!firebase.apps.length) {
            console.error("Firebase not initialized.");
            reject("Firebase not initialized.");
            return;
        }

        const db = firebase.firestore();
        const myPost = db.collection('posts').doc('firstpost');

        myPost.get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    if (data.Learn_React && Array.isArray(data.Learn_React)) {
                        for (let i = 0; i < topicStates.length; i++) {
                            if (i < data.Learn_React.length) {
                                topicStates[i] = Boolean(data.Learn_React[i]);
                            }
                        }
                    }
                } else {
                    console.warn("No such document in Firestore.");
                }
                resolve(); // Resolve after updating topicStates
            })
            .catch(error => {
                console.error("Error fetching document: ", error);
                reject(error);
            });
    });
}
