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
        return (
            <div>
                {isLoading ? <ReactLoading color={'spin'} height={40} width={40} /> : <FactCatList factcat={factcat} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, dispatchProps)(DashboardContent);

