var ruleforms = ["Product"];

var productFacets =
{
    "@context": {"@vocab": "http://localhost:8080/json-ld/facet"},
    "@graph": [{
        "@id": "Product/00000000-0000-0005-0000-000000000001/00000000-0000-0004-0000-000000000001",
        "@typeName": "(ANY):(ANY)"
    }, {
        "@id": "Product/00000000-0000-0005-0000-000000000013/00000000-0000-0004-0000-000000000006",
        "@typeName": "is-a:Workspace"
    }, {
        "@id": "Product/00000000-0000-0005-0000-000000000013/bc8a0737-6ae7-11e5-b39a-99b88e1a491e",
        "@typeName": "is-a:Plugin"
    }, {
        "@id": "Product/00000000-0000-0005-0000-000000000013/bc8a0739-6ae7-11e5-b39a-99b88e1a491e",
        "@typeName": "is-a:Argument"
    }, {
        "@id": "Product/00000000-0000-0005-0000-000000000013/bc8a073b-6ae7-11e5-b39a-99b88e1a491e",
        "@typeName": "is-a:Instance Method"
    }, {
        "@id": "Product/00000000-0000-0005-0000-000000000013/bc8a073d-6ae7-11e5-b39a-99b88e1a491e",
        "@typeName": "is-a:Static method"
    }, {
        "@id": "Product/00000000-0000-0005-0000-000000000013/bc8a073f-6ae7-11e5-b39a-99b88e1a491e",
        "@typeName": "is-a:Constructor"
    }, {
        "@id": "Product/00000000-0000-0005-0000-000000000013/bc8a2e51-6ae7-11e5-b39a-99b88e1a491e",
        "@typeName": "is-a:Code Source"
    }],
    "@id": "http://localhost:8080/json-ld/facet/Product"
};

var Facet = React.createClass({
    render: function () {
        return (
            <div className="facet">
                <div className="facetId">
                    {this.props.facet["@id"]}
                </div>
                <div classNmae="facetName">
                    {this.props.facet["@typeName"]}
                </div>
            </div>
        );
    }
});

var FacetList = React.createClass({
    render: function () {
        var facets = [];
        productFacets["@graph"].forEach(function (facet) {
            facets.push(<Facet facet={facet}/>);
        });

        return (
            <div className="ruleformList">
                {facets}
            </div>
        );
    }
})

var Ruleform = React.createClass({
    render: function () {
        return (
            <div className="ruleform">
                {this.props.name}
                <FacetList />
            </div>
        );

    }
});

var RuleformList = React.createClass({
    render: function () {
        var rfs = [];
        ruleforms.forEach(function (rf) {
            rfs.push(<Ruleform name={rf}/>);
        });

        return (
            <div className="ruleformList">
                {rfs}
            </div>
        );
    }
});

var AppContainer = React.createClass({
    render: function () {
        return (
            <div className="appContainer">
                Facet Explorer
                <RuleformList ruleforms={ruleforms}/>
            </div>
        );
    }
});

React.render(
    <AppContainer />,
    document.getElementById('content')
);