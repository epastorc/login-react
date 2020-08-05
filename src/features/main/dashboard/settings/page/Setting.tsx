import { RootState } from 'RootType';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import { requestDogFacts } from '../store/actions';
import * as selectors from '../store/selectors';
import FactDogList from '../components/FactDogList';


const mapStateToProps = (state: RootState) => ({
    factdogs: selectors.getFactDog(state),
    isLoading: selectors.isLoading(state),
    getDogFacts: () => requestDogFacts.request()
});
const dispatchProps = {
    getDogFacts: () => requestDogFacts.request()
};
type Props = ReturnType<typeof mapStateToProps>;

class Setting extends Component<Props> {
    componentDidMount() {
        this.props.getDogFacts();
    }
    render() {
        const { factdogs, isLoading } = this.props;
        return isLoading && factdogs.length > 0 ? <ReactLoading color={'#f7b500'} height={200} width={200} /> : <FactDogList factcat={factdogs} />;
    }
}

export default connect(mapStateToProps, dispatchProps)(Setting);

