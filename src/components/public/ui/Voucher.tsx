import React from 'react';

interface VoucherProps {
  /**
   * The background color of the voucher (default: #2E7D52 - green)
   */
  backgroundColor?: string;
  /**
   * The size of the voucher
   * - 'small': Compact size for lists
   * - 'medium': Default size
   * - 'large': Larger size for emphasis
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Custom className for additional styling
   */
  className?: string;
  /**
   * Content to display inside the voucher (optional)
   */
  children?: React.ReactNode;
}

const Voucher: React.FC<VoucherProps> = ({ 
  backgroundColor = '#2E7D52',
  size = 'medium',
  className = '',
  children 
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      width: 'w-24',
      height: 'h-24',
      notchSize: 'w-6 h-3',
      notchSpacing: 'space-x-3',
      bottomRectWidth: 'w-2',
      bottomRectHeight: 'h-1',
      bottomSpacing: 'space-x-1',
    },
    medium: {
      width: 'w-32',
      height: 'h-32',
      notchSize: 'w-8 h-4',
      notchSpacing: 'space-x-4',
      bottomRectWidth: 'w-3',
      bottomRectHeight: 'h-1',
      bottomSpacing: 'space-x-1.5',
    },
    large: {
      width: 'w-40',
      height: 'h-40',
      notchSize: 'w-10 h-5',
      notchSpacing: 'space-x-5',
      bottomRectWidth: 'w-4',
      bottomRectHeight: 'h-2',
      bottomSpacing: 'space-x-2',
    },
  };

  const config = sizeConfig[size];

  return (
    <div className={`relative ${className}`}>
      {/* Border wrapper with rounded top corners */}
      <div className="border border-0 rounded-t-2xl overflow-hidden bg-white">
        {/* Main voucher body (colored part) */}
        <div 
          className={`relative ${config.height} overflow-visible`}
          style={{ backgroundColor }}
        >
          {/* Content area */}
          {children && (
            <div className="w-full h-full flex items-center justify-center p-4">
              {children}
            </div>
          )}

          {/* Top notches (half circles/scalloped edge) */}
          <div className={`absolute top-0 left-8 right-8 flex justify-between ${config.notchSpacing} px-4`}>
            {[...Array(5)].map((_, i) => (
                <div
                    key={`top-${i}`}
                    className={`${config.notchSize} -translate-y-1/15 rounded-b-full`}
                    style={{ backgroundColor: '#f9fafb' }}
                />
            ))}
          </div>
        </div>

        {/* Bottom section with rectangles (perforation style) */}
        <div className="relative bg-white h-1 flex items-center justify-center">
          <div className={`absolute top-0 left-0 right-0 flex justify-between ${config.bottomSpacing} px-1`}>
            {[...Array(30)].map((_, i) => (
              <div
                key={`bottom-${i}`}
                className={`${config.bottomRectWidth} ${config.bottomRectHeight} bg-gray-200`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
