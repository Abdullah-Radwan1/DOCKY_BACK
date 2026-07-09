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

-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "plan" "PlanType" NOT NULL DEFAULT 'free';

-- CreateTable
CREATE TABLE "usage_quotas" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "guest_id" TEXT,
    "uploads_used" INTEGER NOT NULL DEFAULT 0,
    "analyses_used" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "usage_quotas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usage_quotas_user_id_key" ON "usage_quotas"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "usage_quotas_guest_id_key" ON "usage_quotas"("guest_id");

-- CreateIndex
CREATE INDEX "usage_quotas_user_id_idx" ON "usage_quotas"("user_id");

-- CreateIndex
CREATE INDEX "usage_quotas_guest_id_idx" ON "usage_quotas"("guest_id");

-- AddForeignKey
ALTER TABLE "usage_quotas" ADD CONSTRAINT "usage_quotas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
