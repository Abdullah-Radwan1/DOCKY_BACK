-- CreateEnum
CREATE TYPE "FindingStatus" AS ENUM ('open', 'resolved');

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
ALTER TABLE "findings" ADD COLUMN     "resolved_at" TIMESTAMPTZ,
ADD COLUMN     "status" "FindingStatus" NOT NULL DEFAULT 'open',
ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "created_at" SET DEFAULT NOW(),
ALTER COLUMN "updated_at" SET DEFAULT NOW();

-- CreateIndex
CREATE INDEX "findings_analysis_id_status_idx" ON "findings"("analysis_id", "status");
