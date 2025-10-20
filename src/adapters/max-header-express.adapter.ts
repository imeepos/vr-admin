import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as http from 'http';
import * as https from 'https';

const DEFAULT_MAX_HEADER_SIZE = 64 * 1024; // 64KB, higher than Node's default 8KB

/**
 * Custom Express adapter that increases the maximum allowed HTTP header size.
 * This prevents "431 Request Header Fields Too Large" responses when the
 * client sends large cookies or auth headers (e.g. GraphQL playground state).
 */
export class MaxHeaderExpressAdapter extends ExpressAdapter {
  constructor(private readonly maxHeaderSize = DEFAULT_MAX_HEADER_SIZE) {
    super();
  }

  override initHttpServer(options: NestApplicationOptions) {
    if (options?.httpsOptions) {
      this.setHttpServer(
        https.createServer(
          {
            ...options.httpsOptions,
            maxHeaderSize: this.maxHeaderSize,
          },
          this.getInstance(),
        ),
      );
    } else {
      this.setHttpServer(
        http.createServer(
          {
            maxHeaderSize: this.maxHeaderSize,
          },
          this.getInstance(),
        ),
      );
    }

    if (options?.forceCloseConnections) {
      const adapter = this as unknown as {
        trackOpenConnections?: () => void;
      };
      adapter.trackOpenConnections?.();
    }
  }
}

export default MaxHeaderExpressAdapter;
