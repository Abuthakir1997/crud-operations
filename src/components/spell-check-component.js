import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId } from "./demo";
import "./spell-check-styles.css";

export function GrammarlyEditor() {
    return (
        <GrammarlyEditorPlugin clientId={demoClientId}>
            <div className="wrapper">
                <textarea className="wrapper__text-area" placeholder="please enter your text...."></textarea>
            </div>
            <div className="suggestions">
                <span>Hints:</span>
                <span className="suggestions__correction ">correction suggestion</span>
                <span className="suggestions__advanced">advanced suggestion</span>
                <span className="suggestions__guide">style guide suggestion</span>
            </div>

        </GrammarlyEditorPlugin>
    );
}

