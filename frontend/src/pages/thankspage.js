import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const ThanksPage = () => {
    const { data } = useParams();
    // console.log(data)
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();

        navigate('/display')
    }

    return (
        <div>
            <form>
                <fieldset>
                    <legend>Submitted successfully</legend>
                    <legend>({data})</legend>
                    <button type="submit" class="btn btn-primary" onClick={handleClick}>Show all</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ThanksPage;