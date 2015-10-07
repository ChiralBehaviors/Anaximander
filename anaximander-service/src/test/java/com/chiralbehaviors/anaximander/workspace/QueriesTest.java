package com.chiralbehaviors.anaximander.workspace;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Map;

import org.junit.Test;

import com.chiralbehaviors.CoRE.meta.models.AbstractModelTest;
import com.chiralbehaviors.CoRE.phantasm.resources.GraphQlResource;

public class QueriesTest extends AbstractModelTest {
    
    
    @Test
    public void testWorkspaceQuery() {
        GraphQlResource res = new GraphQlResource(mockedEmf());
        List<Map<String, Object>> results = res.getWorkspaces(null);
        assertTrue(results.size() > 0);

    }

}
