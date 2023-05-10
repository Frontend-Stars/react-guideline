import React from 'react';
import { Link } from 'react-router-dom';

export const Forbidden = (): JSX.Element =>
    (<div>You have not access to this functionality please contact with you administrator for get access <Link to="/">go to Home</Link></div>);
