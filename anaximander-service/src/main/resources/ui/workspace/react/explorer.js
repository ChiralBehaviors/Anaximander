var Facet = React.createClass({
    render: function() {
        return (
            <div className="facet">
                Facet
            </div>
        );
    }
});

var FacetBox = React.createClass({
    render: function() {
        return (
            <div className="facetBox">
                Facet Box
                <Facet />
            </div>
        );
    }
});

var Workspace = React.createClass({
    render: function() {
        return (
            <div className="workspace">
                Workspace
                <FacetBox />
            </div>
        );
    }
});


var WorkspaceBox = React.createClass({
    render: function() {
        return (
            <div className="workspaceBox">
            Workspace Box
                <Workspace />
        </div>
        );
    }
});

React.render(
<WorkspaceBox />,
    document.getElementById('content')
);