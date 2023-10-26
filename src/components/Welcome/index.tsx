import { Sentences } from "../../data/sentences"
// import React, { useState, useEffect } from 'react';

import './styles.css'

export function Welcome(){

    function renderSentences() {
        const sentencesToRender = Sentences.slice(1, 5); // Pega as 5 primeiras frases da array.
        return sentencesToRender.map((sentence, index) => (
            <p key={index}>{sentence}</p>
        ));
    }

    // efeotp 

    return(
        <>
        <div className="sectionWelcome">
            <img src="./thumb-bnc.png" className="welcomeImg" />
            <div className="sentences">
               {renderSentences()}
            </div>
        </div>
        </>
    )
}