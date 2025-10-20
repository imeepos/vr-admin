jest.mock('uuid', () => ({ v4: jest.fn() }));

import { NotFoundException } from '@nestjs/common';
import { ModelController } from './model.controller';
import type { ModelService } from './model.service';

describe('ModelController', () => {
  let controller: ModelController;
  let modelService: jest.Mocked<ModelService>;

  beforeEach(() => {
    modelService = {
      findByUuid: jest.fn(),
    } as unknown as jest.Mocked<ModelService>;

    controller = new ModelController(modelService);
  });

  it('should return model when found by uuid', async () => {
    const uuid = 'test-uuid';
    const model: any = { uuid, title: 'Sample Model' };
    modelService.findByUuid.mockResolvedValue(model);

    const result = await controller.getModelByUuid(uuid);

    expect(modelService.findByUuid).toHaveBeenCalledWith(uuid);
    expect(result).toBe(model);
  });

  it('should throw NotFoundException when model is missing', async () => {
    const uuid = 'missing-uuid';
    modelService.findByUuid.mockResolvedValue(null);

    await expect(controller.getModelByUuid(uuid)).rejects.toThrow(
      NotFoundException,
    );
  });
});
