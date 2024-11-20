// import React, { useEffect, useState } from 'react';
// import RecommendationItem from './RecommendationItem';
// // import axios from 'axios';

// function RecommendationsList({ apiResponse }) {

//     // setting default api response for now to avoid if there is any issue with the api response
//     apiResponse = "round";
    
//     const [recommendations, setRecommendations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     ////// This block of the code connects with api to fetch the recommendations which will be used for later assignments/////
    
//     // useEffect(() => {
//         // Function to fetch glasses based on the detected face shape
     
//         //     const fetchRecommendations = async () => {
//     //         try {
//     //             setLoading(true);
//     //             const storeId = "6710784d259452f710e58368";  // Replace with the actual store ID if applicable
//     //             const response = await axios.get(`http://127.0.0.1:8000/stores/${storeId}/glasses/${apiResponse}`);
//     //             setRecommendations(response.data);  // Set the fetched recommendations
//     //             setLoading(false);
//     //         } catch (err) {
//     //             setError("Failed to load recommendations.");
//     //             setLoading(false);
//     //         }
//     //     };

//     //     if (apiResponse) {
//     //         fetchRecommendations();  // Only fetch if apiResponse is available
//     //     }
//     // }, [apiResponse]);
   
//     useEffect(() => {
//         const fetchRecommendations = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch('sample_data.json');
//                 const data = await response.json();
//                 setRecommendations(data);  // Set the fetched recommendations
//                 setLoading(false);
//             } catch (err) {
//                 setError("Failed to load recommendationsa.");
//                 setLoading(false);
//             }
//         };
//         fetchRecommendations();  
//     }, [apiResponse]);

//     return (
//         <div>
//             <h2>Recommended Glasses</h2>
//             {apiResponse && (
//                 <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
//                     Detected Face Shape: {apiResponse}
//                 </div>
//             )}
//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {!loading && !error && recommendations.length === 0 && (
//                 <p>No recommendations available for this face shape.</p>
//             )}
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//                 {!loading && !error && recommendations.map((item) => (
//                     <div key={item._id} style={{ flex: '1 1 45%', boxSizing: 'border-box' }}>
//                         <RecommendationItem item={item} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default RecommendationsList;

import React, { useEffect, useState } from 'react';
import RecommendationItem from './RecommendationItem';

function RecommendationsList({ apiResponse }) {

    // setting default api response for now to avoid if there is any issue with the api response
    apiResponse = "round";
    
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

<<<<<<< Updated upstream
    ////// This block of the code connects with api to fetch the recommendations which will be used for later assignments/////
    
    // useEffect(() => {
        // Function to fetch glasses based on the detected face shape
     
        //     const fetchRecommendations = async () => {
    //         try {
    //             setLoading(true);
    //             const storeId = "6710784d259452f710e58368";  // Replace with the actual store ID if applicable
    //             const response = await axios.get(`http://127.0.0.1:8000/stores/${storeId}/glasses/${apiResponse}`);
    //             setRecommendations(response.data);  // Set the fetched recommendations
    //             setLoading(false);
    //         } catch (err) {
    //             setError("Failed to load recommendations.");
    //             setLoading(false);
    //         }
    //     };

    //     if (apiResponse) {
    //         fetchRecommendations();  // Only fetch if apiResponse is available
    //     }
    // }, [apiResponse]);
   
    // This block of the code is used to fetch the recommendations from the sample data which is used for the assignment
=======
>>>>>>> Stashed changes
    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                setLoading(true);
                const response = await fetch('sample_data.json');
                const data = await response.json();
                setRecommendations(data);  // Set the fetched recommendations
                setLoading(false);
            } catch (err) {
                setError("Failed to load recommendations.");
                setLoading(false);
            }
        };
        fetchRecommendations();  
    }, [apiResponse]);

    // Styling for scrollable recommendations container
    const styles = {
        container: {
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#f1f0eb',
            maxWidth: '800px',
            margin: '20px auto',
            fontFamily: '"Playfair Display", serif',
        },
        header: {
            fontSize: '2em',
            color: '#4B382A',
            marginBottom: '15px',
            textAlign: 'center',
        },
        faceShape: {
            marginBottom: '10px',
            fontWeight: 'bold',
            color: '#4B382A',
            textAlign: 'center',
        },
        recommendationsContainer: {
            maxHeight: '600px',  // Set a fixed height for scrollable area
            overflowY: 'auto',   // Enable vertical scrolling
            padding: '10px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            borderTop: '1px solid #ddd',
            paddingTop: '15px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Recommended Glasses</h2>
            {apiResponse && (
                <div style={styles.faceShape}>Detected Face Shape: {apiResponse}</div>
            )}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && recommendations.length === 0 && (
                <p>No recommendations available for this face shape.</p>
            )}
            <div style={styles.recommendationsContainer}>
                {!loading && !error && recommendations.map((item) => (
                    <div key={item._id} style={{ flex: '1 1 45%', boxSizing: 'border-box' }}>
                        <RecommendationItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecommendationsList;
