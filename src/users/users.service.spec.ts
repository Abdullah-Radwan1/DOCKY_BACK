jest.mock('../prisma/prisma.service', () => ({
  PrismaService: class {},
}));

import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: {
    profile: {
      update: jest.Mock;
    };
  };

  beforeEach(() => {
    prisma = {
      profile: {
        update: jest.fn(),
      },
    };

    service = new UsersService(prisma as unknown as PrismaService);
  });

  it('persists notification preference toggles when updating the current user', async () => {
    const updatedProfile = {
      id: 'user-1',
      email: 'user@example.com',
      fullName: 'Jane Doe',
      avatarUrl: null,
      role: 'viewer',
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: new Date('2024-01-01T00:00:00.000Z'),
      allowEmailNotifications: false,
      allowExpiryReminders: false,
      allowRiskAlerts: true,
      allowAnalysisAlerts: false,
    };

    prisma.profile.update.mockResolvedValue(updatedProfile);

    const result = await service.updateMe('user-1', {
      allowEmailNotifications: false,
      allowExpiryReminders: false,
      allowRiskAlerts: true,
      allowAnalysisAlerts: false,
    });

    expect(prisma.profile.update).toHaveBeenCalledWith({
      where: { id: 'user-1' },
      data: {
        allowEmailNotifications: false,
        allowExpiryReminders: false,
        allowRiskAlerts: true,
        allowAnalysisAlerts: false,
      },
    });

    expect(result).toEqual({
      id: 'user-1',
      email: 'user@example.com',
      full_name: 'Jane Doe',
      avatar_url: null,
      role: 'viewer',
      created_at: updatedProfile.createdAt,
      updated_at: updatedProfile.updatedAt,
      allow_email_notifications: false,
      allow_expiry_reminders: false,
      allow_risk_alerts: true,
      allow_analysis_alerts: false,
    });
  });
});
