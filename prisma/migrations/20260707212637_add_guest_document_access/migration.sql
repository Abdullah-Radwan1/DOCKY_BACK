/*
  Warnings:

  - A unique constraint covering the columns `[guest_token]` on the table `documents` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "activity_log" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "ai_responses" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "compliance_queries" ADD COLUMN     "guest_id" TEXT,
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT NOW(),
ALTER COLUMN "updated_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "document_analyses" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "guest_token" TEXT,
ADD COLUMN     "is_guest" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "findings" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "created_at" SET DEFAULT NOW(),
ALTER COLUMN "updated_at" SET DEFAULT NOW();

-- CreateIndex
CREATE UNIQUE INDEX "documents_guest_token_key" ON "documents"("guest_token");
