import React,{Component,Children} from 'react';
import '@assets/css/widget/nav-link.css';


interface Props {
    url : string
    children : string
}

class NavLink extends Component<Props> {
    private redirect = () : undefined => {
        location.href = this.props.url;
        return undefined;
    }

    public render() {
        return (
            <nav widget-navlink=""  onClick={this.redirect}>
                <span className="name">{this.props.children}</span>
                <span>.</span>
            </nav>
        );
    }
}

export default NavLink;