// Home.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExampleValue, setLoading, setError } from '../store/exampleSlice'; // Importez les actions du reducer
import { fetchExampleData } from '../store/api';

const Home = () => {
    const dispatch = useDispatch(); // Obtenez la fonction dispatch


    // Utilisez le hook useSelector pour récupérer l'état géré par Redux
    const exampleValue = useSelector(state => state.exampleX.data.exampleValue);
    const loading = useSelector(state => state.exampleX.loading);
    const error = useSelector(state => state.exampleX.error);


    useEffect(() => {
        // Utilisez useEffect pour effectuer des opérations de chargement initial des données
        dispatch(setLoading(true)); // Définissez loading à true pendant le chargement des données
        fetchExampleData() // Appelez votre fonction d'API pour récupérer les données
            .then(data => {
                console.log(data);
                dispatch(setExampleValue(data?.body)); // Mettez à jour l'état avec les données reçues de l'API
                dispatch(setLoading(false)); // Mettez loading à false après avoir terminé le chargement
            })
            .catch(error => {
                dispatch(setError(error.message)); // Gérez les erreurs et mettez à jour l'état avec l'erreur
                dispatch(setLoading(false)); // Assurez-vous de mettre loading à false en cas d'erreur
            });
    }, [dispatch]); // Assurez-vous de passer dispatch comme dépendance pour useEffect

    return (
        <div>
            <h2>Home</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && <p>Example Value: {exampleValue}</p>}
        </div>
    );
};

export default Home;
