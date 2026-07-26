import { Controller, Get, Param, ParseUUIDPipe, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DashboardService } from './dashboard.service';
import { DocumentStatusService } from './document-status.service';

/**
 * Dashboard controller.
 *
 * All routes are protected by JWT.
 * The requesting user's `id` (from the JWT sub claim) is used to scope
 * all document-level aggregates.
 */
@UseGuards(JwtAuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly documentStatusService: DocumentStatusService,
  ) {}

  /**
   * GET /dashboard/summary
   *
   * Returns the full pre-computed dashboard payload for the authenticated user.
   * Includes KPI cards, compliance distribution, risk levels, findings severity,
   * recent analyses, documents requiring attention, upcoming expirations, and
   * recent activity logs.
   */
  @Get('summary')
  async getSummary(@Request() req: { user: { id: string } }) {
    return this.dashboardService.getSummary(req.user.id);
  }

  /**
   * GET /dashboard/documents/:id/status
   *
   * Returns the computed business-facing status for a single document.
   * Useful for refreshing a single document card without re-fetching the
   * entire dashboard summary.
   */
  @Get('documents/:id/status')
  async getDocumentStatus(
    @Param('id', new ParseUUIDPipe()) id: string,
  ) {
    return this.documentStatusService.getDocumentStatus(id);
  }
}
