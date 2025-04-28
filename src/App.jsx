import { useState } from 'react';
import { validateInputs } from './validation';
import './App.css';

function Form() {
    const [ds1, setDs1] = useState('');
    const [ds1CC, setDs1CC] = useState('');
    const [ds2CC, setDs2CC] = useState('');
    const [exam, setExam] = useState('');
    const [otherNote, setOtherNote] = useState('');
    const [otherNoteCC, setOtherNoteCC] = useState('');
    const [cards, setCards] = useState([]);
    const [moyList, setMoyList] = useState([]);
    const [nameMix, setNameMix] = useState('');
    const [nameCC, setNameCC] = useState('');
    const [coefMix, setCoefMix] = useState('');
    const [coefCC, setCoefCC] = useState('');
    const [name, setName] = useState('');
    const [moy, setMoy] = useState('');
    const [coef, setCoef] = useState('');

    const calculMoy = () => {
        let sum = 0;
        let totalCoef = 0;
        moyList.forEach(item => {
            if (item.coef !== 0) {
                sum += parseFloat(item.moy) * parseFloat(item.coef);
                totalCoef += parseFloat(item.coef);
            }
        });
        const moyenne = (sum / totalCoef).toFixed(1);
        const successMessage = moyenne >= 9.95 ? "Succès" : "Échec";
        return {
            average: moyenne,
            successMessage: successMessage,
        };
    };

    const successCard = () => {
        const { average, successMessage } = calculMoy();
        const successcard = {
            type: 'Summary',
            msg: successMessage,
            moy: average,
        };
        setCards([...cards, successcard]);
    };

    const addCard = () => {
        const validation = validateInputs(nameMix, coefMix, exam, ds1, otherNote);
        if (!validation.valid) {
            alert(validation.message);
            return;
        }
        const moy = (parseFloat(ds1) * 0.2 + parseFloat(exam) * 0.7 + parseFloat(otherNote) * 0.1);
        const newCard = {
            type: 'Mix',
            nameMix,
            coefMix: parseFloat(coefMix).toFixed(2),
            ds1,
            exam,
            otherNote,
            result: moy.toFixed(2)
        };
        setCards([...cards, newCard]);
        setMoyList([...moyList, { moy: moy.toFixed(2), coef: parseFloat(coefMix) }]);
        setDs1('');
        setExam('');
        setOtherNote('');
        setNameMix('');
        setCoefMix('');
    };

    const addCardCC = () => {
        const validation = validateInputs(nameCC, coefCC, ds1CC, ds2CC, otherNoteCC);
        if (!validation.valid) {
            alert(validation.message);
            return;
        }
        const moy = (parseFloat(ds1CC) * 0.4 + parseFloat(ds2CC) * 0.4 + parseFloat(otherNoteCC) * 0.2);
        const newCard = {
            type: 'CC',
            nameCC,
            coefCC: parseFloat(coefCC).toFixed(2),
            ds1CC,
            ds2CC,
            otherNoteCC,
            result: moy.toFixed(2)
        };
        setCards([...cards, newCard]);
        setMoyList([...moyList, { moy: moy.toFixed(2), coef: parseFloat(coefCC) }]);
        setDs1CC('');
        setDs2CC('');
        setOtherNoteCC('');
        setNameCC('');
        setCoefCC('');
    };
    
    const deleteCard = (indexToDelete) => {
        setCards((prevCards) => prevCards.filter((_, index) => index !== indexToDelete));
        setMoyList((prevMoyList) => prevMoyList.filter((_, index) => index !== indexToDelete));
    };

    const addCustomCard = () => {
        const validation = validateInputs(name, coef, moy, moy, moy);
        if (!validation.valid) {
            alert(validation.message);
            return;
        }
        const result = (parseFloat(moy) * parseFloat(coef)).toFixed(2);
        const newCard = {
            type: 'Custom',
            name,
            moy,
            coef: parseFloat(coef).toFixed(2),
            result
        };
        setCards([...cards, newCard]);
        setMoyList([...moyList, { moy: parseFloat(moy), coef: parseFloat(coef) }]);
        setName('');
        setMoy('');
        setCoef('');
    };

    const calculableCards = cards.filter(card => card.type !== 'Summary').length > 0;
    const hasSummaryCard = cards.some(card => card.type === 'Summary');

    return (
        <div className="page-container">
            <h1>Calculateur de moyenne de l'Esen</h1>
            <div className="container">
                <div className="MatMix">
                    <h4>Matiere Mix</h4>
                    <input type="text" placeholder='Nom de la matiere' value={nameMix} className='inputText' onChange={(e) => setNameMix(e.target.value)} />
                    <input type="text" placeholder='Coef' value={coefMix} className='inputText' onChange={(e) => setCoefMix(e.target.value)} />
                    <input type="text" placeholder="Exam" className="inputText" value={exam} onChange={(e) => setExam(e.target.value)} />
                    <input type="text" placeholder="Ds1" className="inputText" value={ds1} onChange={(e) => setDs1(e.target.value)} />
                    <input type="text" placeholder="Autre Note" className="inputText" value={otherNote} onChange={(e) => setOtherNote(e.target.value)} />
                    <button className="add" onClick={addCard}>Ajouter la Note</button>
                </div>
                <div className="MatCC">
                    <h4>Matiere CC</h4>
                    <input type="text" placeholder='Nom de la matiere' value={nameCC} className='inputTextcc' onChange={(e) => setNameCC(e.target.value)} />
                    <input type="text" placeholder='Coef' value={coefCC} className='inputTextcc' onChange={(e) => setCoefCC(e.target.value)} />
                    <input type="text" placeholder="Ds1" className="inputTextcc" value={ds1CC} onChange={(e) => setDs1CC(e.target.value)} />
                    <input type="text" placeholder="DS2" className="inputTextcc" value={ds2CC} onChange={(e) => setDs2CC(e.target.value)} />
                    <input type="text" placeholder="Autre Note" className="inputTextcc" value={otherNoteCC} onChange={(e) => setOtherNoteCC(e.target.value)} />
                    <button className="add" onClick={addCardCC}>Ajouter la Note</button>
                </div>
                <div className="Custom">
                    <h4>Calculate By Moy</h4>
                    <input type="text" placeholder='Nom de la matiere' value={name} className='inputTextCustom' onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='Moy' value={moy} className='inputTextCustom' onChange={(e) => setMoy(e.target.value)} />
                    <input type="text" placeholder='Coef' value={coef} className='inputTextCustom' onChange={(e) => setCoef(e.target.value)} />
                    <button className="add" onClick={addCustomCard}>Ajouter la Note</button>
                </div>
            </div>

            <div className='content-wrapper'>
                <div className='card-container'>
                    {cards.map((card, index) => (
                        <div key={index} className='cards'>
                            {card.type === 'Mix' && (
                                <div>
                                    <button onClick={() => deleteCard(index)} className='delete'>X</button>
                                    <h3>Matiere: {card.nameMix}</h3>
                                    <p>Coef: {card.coefMix}</p>
                                    <p>DS1: {card.ds1}</p>
                                    <p>Examen: {card.exam}</p>
                                    <p>Autre Note: {card.otherNote}</p>
                                    <p>Moyenne: {card.result}</p>
                                </div>
                            )}
                            {card.type === 'CC' && (
                                <div>
                                    <button onClick={() => deleteCard(index)} className='delete'>X</button>
                                    <h3>Matiere: {card.nameCC}</h3>
                                    <p>Coef: {card.coefCC}</p>
                                    <p>DS1: {card.ds1CC}</p>
                                    <p>DS2: {card.ds2CC}</p>
                                    <p>Autre Note: {card.otherNoteCC}</p>
                                    <p>Moyenne: {card.result}</p>
                                </div>
                            )}
                            {card.type === 'Custom' && (
                                <div>
                                    <button onClick={() => deleteCard(index)} className='delete'>X</button>
                                    <h3>Nom: {card.name}</h3>
                                    <p>Moy: {card.moy}</p>
                                    <p>Coef: {card.coef}</p>
                                    <p>Result: {card.result}</p>
                                </div>
                            )}
                            {card.type === 'Summary' && (
                                <div>
                                    <button onClick={() => deleteCard(index)} className='delete'>X</button>
                                    <h3>Resultat: {card.msg}</h3>
                                    <p>Moyenne: {card.moy}</p>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Moved the button here */}
                    {calculableCards && !hasSummaryCard && (
                        <button className='calc' onClick={successCard}>Calculer la moyenne</button>
                    )}
                </div>
            </div>
            <footer class="footer">
                <div class="footer-content">
                    <p>&copy; 2025 Your Ghaith Kouki. All rights reserved.</p>
                    <div class="footer-links">
                    <a href="https://github.com/ghaithkouki" target="_blank">GitHub</a> |
                    <a href="mailto:ghaithkouki0714@gmail.com">Email</a> |
                    <a href="https://www.linkedin.com/in/ghaith-kouki-4010a3329" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Form;
