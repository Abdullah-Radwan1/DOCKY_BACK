/*
  Warnings:

  - You are about to drop the column `organization_id` on the `activity_log` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `documents` table. All the data in the column will be lost.
  - You are about to drop the column `organization_id` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "activity_log" DROP CONSTRAINT "activity_log_organization_id_fkey";

-- DropForeignKey
ALTER TABLE "documents" DROP CONSTRAINT "documents_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_organization_id_fkey";

-- DropIndex
DROP INDEX "activity_log_organization_id_created_at_idx";

-- DropIndex
DROP INDEX "documents_organizationId_idx";

-- DropIndex
DROP INDEX "profiles_organization_id_idx";

-- AlterTable
ALTER TABLE "activity_log" DROP COLUMN "organization_id",
ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "ai_responses" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "compliance_queries" ALTER COLUMN "created_at" SET DEFAULT NOW(),
ALTER COLUMN "updated_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "document_analyses" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "documents" DROP COLUMN "organizationId";

-- AlterTable
ALTER TABLE "findings" ALTER COLUMN "created_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "created_at" SET DEFAULT NOW(),
ALTER COLUMN "updated_at" SET DEFAULT NOW();

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "organization_id";

-- DropTable
DROP TABLE "organizations";
