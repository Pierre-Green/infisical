
import express from "express";
const router = express.Router();
import { requireAuth } from "../../middleware";
import { universalAuthController } from "../../controllers/v1";
import { AuthMode } from "../../variables";

router.post(
    "/token/renew", 
    universalAuthController.renewAccessToken
);

router.post(
    "/universal-auth/login",
    universalAuthController.loginIdentityUniversalAuth
);

router.post(
    "/universal-auth/identities/:identityId",
    requireAuth({
    acceptedAuthModes: [AuthMode.JWT]
    }),
    universalAuthController.addIdentityUniversalAuth
);

router.patch(
    "/universal-auth/identities/:identityId",
    requireAuth({
    acceptedAuthModes: [AuthMode.JWT]
    }),
    universalAuthController.updateIdentityUniversalAuth
);

router.get(
    "/universal-auth/identities/:identityId",
    requireAuth({
    acceptedAuthModes: [AuthMode.JWT]
    }),
    universalAuthController.getIdentityUniversalAuth
);

router.post(
    "/universal-auth/identities/:identityId/client-secrets",
    requireAuth({
    acceptedAuthModes: [AuthMode.JWT]
    }),
    universalAuthController.createUniversalAuthClientSecret
);

router.get(
    "/universal-auth/identities/:identityId/client-secrets",
    requireAuth({
    acceptedAuthModes: [AuthMode.JWT]
    }),
    universalAuthController.getUniversalAuthClientSecrets
);

router.post(
    "/universal-auth/identities/:identityId/client-secrets/:clientSecretId/revoke",
    requireAuth({
    acceptedAuthModes: [AuthMode.JWT]
    }),
    universalAuthController.revokeUniversalAuthClientSecret
);

export default router;