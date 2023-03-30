import Clerk from '@clerk/clerk-js';

const publishableKey = "pk_test_YXJyaXZpbmctc3RpbmdyYXktOTYuY2xlcmsuYWNjb3VudHMuZGV2JA";


class clerkAuth {

    private clerk = new Clerk(publishableKey);

    private isSetted = false;

    async setupClerk() {
        if (this.isSetted) return;
        await this.clerk.load({
            supportEmail: "support@paritexcyprus.com",
            signInUrl: "https://accounts.paritexcyprus.com/sign-in"
        });
        this.isSetted = true
        return this.clerk
    }

    async getClerk() {
        if (!this.isSetted) await this.setupClerk()
        return this.clerk
    }

}

export default new clerkAuth()