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
        return (
            <div>
                {isLoading && factdogs.length > 0 ? <ReactLoading color={'spin'} height={40} width={40} /> : <FactDogList factcat={factdogs} />}
            </div>
        )
    }
}

export default connect(mapStateToProps, dispatchProps)(Setting);

