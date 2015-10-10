package com.chiralbehaviors.anaximander.workspace;

import static org.junit.Assert.assertTrue;

import java.io.InputStream;
import java.util.List;
import java.util.Map;

import org.junit.BeforeClass;
import org.junit.Test;

import com.chiralbehaviors.CoRE.meta.models.AbstractModelTest;
import com.chiralbehaviors.CoRE.meta.workspace.dsl.WorkspaceImporter;
import com.chiralbehaviors.CoRE.phantasm.resources.GraphQlResource;

public class QueriesTest extends AbstractModelTest {

    @BeforeClass
    public static void loadWorkspaces() throws Exception {

        em.getTransaction().begin();
        InputStream is = QueriesTest.class.getResourceAsStream("/steward-workspace.wsp");
        WorkspaceImporter.manifest(is, model);
        em.getTransaction().commit();
    }

    @Test
    public void testWorkspaceQuery() throws Exception {

        GraphQlResource res = new GraphQlResource(mockedEmf());
        List<Map<String, Object>> results = res.getWorkspaces(null);
        assertTrue(results.size() > 0);
        //        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        //        String json = ow.writeValueAsString(results);
        //        System.out.println(json);

    }

}
