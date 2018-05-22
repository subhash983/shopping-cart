import React from 'react';
import {Link} from 'react-router-dom';
//import WithClass from '../hoc/withClass';
import withClass from '../hoc/withClassAlternate';

class Header extends React.Component {
    authButton() {
        return <button>Sign In</button>;
    }
    render() {
        return (

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                        {this.authButton()}
                    </li>
                </ul>
            </nav>

        );
    }
}

export default withClass(Header,'test');
