-- CreateEnum
CREATE TYPE "BillingCycle" AS ENUM ('monthly', 'yearly');

-- AlterTable
ALTER TABLE "activity_log" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "ai_responses" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "compliance_queries" ALTER COLUMN "created_at" SET DEFAULT NOW(),
ALTER COLUMN "updated_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "document_analyses" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "findings" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "created_at" SET DEFAULT NOW(),
ALTER COLUMN "updated_at" SET DEFAULT NOW();

-- CreateTable
CREATE TABLE "paddle_subscriptions" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "paddle_customer_id" TEXT NOT NULL,
    "paddle_subscription_id" TEXT NOT NULL,
    "plan" "PlanType" NOT NULL,
    "billing_cycle" "BillingCycle" NOT NULL,
    "status" TEXT NOT NULL,
    "current_period_end" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "paddle_subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "paddle_subscriptions_user_id_key" ON "paddle_subscriptions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "paddle_subscriptions_paddle_subscription_id_key" ON "paddle_subscriptions"("paddle_subscription_id");

-- AddForeignKey
ALTER TABLE "paddle_subscriptions" ADD CONSTRAINT "paddle_subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
