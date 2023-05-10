import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = (): JSX.Element =>
    (<div>Sorry, Page not found. <Link to="/">go to Home</Link></div>);
