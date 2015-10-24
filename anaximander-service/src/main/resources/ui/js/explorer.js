var React = require('react');
var ReactDOM = require('react-dom');

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

var productFacetInstances =
{
    "@context": "http://localhost:8080/json-ld/facet/Product/00000000-0000-0005-0000-000000000013/00000000-0000-0004-0000-000000000006/context",
    "@graph": [{
        "@id": "@facet:00000000-0000-0004-0000-000000000003",
        "IRI": "urn:uuid:00000000-0000-0004-0000-000000000003",
        "description": "The Kernel Ontology for Ultrastructure [Ain Soph Ur]",
        "imports": {"parallel": false},
        "name": "Ultrastructure Kernel Workspace",
        "plugins": {"parallel": false},
        "updated-by": {
            "@context": "http://localhost:8080/json-ld/ruleform/Agency/context",
            "@id": "@ruleform:00000000-0000-0000-0000-000000000003",
            "@type": "@ruleform",
            "@typeName": "Agency_$$_jvstf9e_34"
        }
    }, {
        "@id": "@facet:20f06ce2-b382-5e98-ae7c-77025e39f31b",
        "IRI": "uri:http://ultrastructure.me/ontology/com.chiralbehaviors/demo/steward-workspace",
        "description": "Task Manager",
        "imports": {"parallel": false},
        "name": "Steward",
        "plugins": {"parallel": false},
        "updated-by": {
            "@context": "http://localhost:8080/json-ld/ruleform/Agency/context",
            "@id": "@ruleform:00000000-0000-0000-0000-000000000004",
            "@type": "@ruleform",
            "@typeName": "Agency_$$_jvstf9e_34"
        }
    }],
    "@id": "http://localhost:8080/json-ld/facet/Product/00000000-0000-0005-0000-000000000013/00000000-0000-0004-0000-000000000006/instances"
};

var CreateInstance = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var name = this.refs.name.value.trim();
        if (!name) {
            return;
        }
        this.props.onCreateInstance({name: name});
        this.refs.name.value = '';
    },
    render: function () {
        return (
            <form className="createInstance" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Ruleform name" ref="name"/>
                <input type="submit" value="Create"/>
            </form>
        )
    }
});

var FacetInstances = React.createClass({

    getInitialState: function() {
        return {data: productFacetInstances["@graph"]};
    },

    getStyle: function () {
        if (this.props.display) {
            return {};
        } else {
            return {display: "none"};
        }
    },

    createInstance: function(value) {
        var instances = this.state.data;
        var newInstances = instances.concat(value);
        this.setState({data: newInstances});
        onChange();
    },

    render: function () {
        var instances = [];
        this.state.data.forEach(function (instance) {
            instances.push(<div className="facetInstance" key={instance['@id']}>
                    {instance["name"]}
                </div>
            );
        });
        return (
            <div className="facetInstances" style={this.getStyle()}>
                <CreateInstance onCreateInstance={this.createInstance}/>
                {instances}
            </div>
        );

    }
});

var Facet = React.createClass({

    display: false,
    onClick: function () {
        this.display = !this.display;
        onChange();
    },

    divStyle: {},


    onMouseOver: function () {
        this.divStyle = {
            backgroundColor: "#CBECF7"
        };
        onChange();
    },

    onMouseOut: function () {
        this.divStyle = {};
        onChange();
    },

    render: function () {
        return (
            <div className="facet" style={this.divStyle} onMouseEnter={this.onMouseOver}
                 onMouseLeave={this.onMouseOut}>
                <div className="facetName">
                    <a href="#" onClick={this.onClick}>{this.props.facet["@typeName"]}</a>
                </div>
                <FacetInstances display={this.display}/>
            </div>
        );
    }
});

var FacetList = React.createClass({
    render: function () {
        return (
            <div className="facetList">
                {productFacets["@graph"].map(function (facet) {
                    return <Facet facet={facet} key={facet["@id"]}/>;
                })}
            </div>
        );
    }
});

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
            rfs.push(<Ruleform name={rf} key={rf}/>);
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

var onChange = function () {
    ReactDOM.render(
        <AppContainer />,
        document.getElementById('content')
    );
};

onChange();