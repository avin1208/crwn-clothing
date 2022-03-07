import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import withSpinner from "../with-spinner/with-spinner.component";

import collectionsOverview from "./collections-overview.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose (
    connect(mapStateToProps), 
    withSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;