import { RootState } from 'RootType';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import { requestCatFacts } from '../store/actions';
import * as selectors from '../store/selectors';
import FactCatList from '../components/FactCatList';


const mapStateToProps = (state: RootState) => ({
    factcat: selectors.getFactCat(state),
    isLoading: selectors.isLoading(state)
});
const dispatchProps = {
    getFactCat: () => requestCatFacts.request()
};
type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

class DashboardContent extends Component<Props> {
    componentDidMount() {
        this.props.getFactCat();
    }
    render() {
        const { factcat, isLoading } = this.props;
        return isLoading ? <ReactLoading color={'#f7b500'} height={200} width={200} /> : <FactCatList factcat={factcat} />; 
    }
}

export default connect(mapStateToProps, dispatchProps)(DashboardContent);

