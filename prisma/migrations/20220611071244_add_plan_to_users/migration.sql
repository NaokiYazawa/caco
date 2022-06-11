-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('Free', 'Basic');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "plan" "Plan" NOT NULL DEFAULT E'Free';
