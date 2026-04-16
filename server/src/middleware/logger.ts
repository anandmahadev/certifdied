import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const timestamp = new Date().toISOString();
    const { method, originalUrl, ip } = req;
    const { statusCode } = res;
    
    // Simple ANSI color mapping
    let statusColor = '\x1b[32m'; // Green for 2xx
    if (statusCode >= 400) statusColor = '\x1b[33m'; // Yellow for 4xx
    if (statusCode >= 500) statusColor = '\x1b[31m'; // Red for 5xx

    process.stdout.write(
      `[\x1b[35m${timestamp}\x1b[0m] [CertifyPro] ${ip} - \x1b[1m${method}\x1b[0m ${originalUrl} - ${statusColor}${statusCode}\x1b[0m (${duration}ms)\n`
    );
  });
  next();
};
