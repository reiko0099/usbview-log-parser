export const SAMPLE_LOG = `符合 USB xHCI 的主机控制器


DriverKey: {36fc9e60-c465-11cf-8056-444553540000}\\0003
VendorID: 8086
DeviceID: 51ED
SubSysID: 8B41103C
Revision: 01

Debug Port Number:  0
Bus.Device.Function (in decimal): 0.20.0

Host Controller Power State Mappings
System State		Host Controller		Root Hub	USB wakeup	Powered
S0 (working)    	D0              	S? (unmapped)   		
S1 (sleep)      	D? (unspecified)	D3              		
S2 (sleep)      	D? (unspecified)	D3              		
S3 (sleep)      	D3              	D2              Yes		Yes
S4 (Hibernate)  	D3              	D2              		
Last Sleep State	S? (unmapped)   
RootHub


Root Hub: USB#ROOT_HUB30#4&262a0829&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Hub Power:                    Self Power
Number of Ports:              16
Power switching:              Ganged
Compound device:              No
Over-current Protection:      Global
High speed capable:           No
High speed:                   Yes
Multiple transaction translations capable:                 No
Performs multiple transaction translations simultaneously: No
Hub wakes when device is connected:                        No
Hub is bus powered:           No
Hub is root:                  Yes
[Port1]  :  USB Composite Device


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

Device Power State:               PowerDeviceD3

       ---===>Device Information<===---
String Descriptor for index 1 not available while device is in low power state.

ConnectionStatus:                  
Current Config Value:              0x01  -> Device Bus Speed: High (is not SuperSpeed or higher capable)
Device Address:                    0x01
Open Pipes:                           1

          ===>Device Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x01
bcdUSB:                          0x0201
bDeviceClass:                      0xEF  -> This is a Multi-interface Function Code Device
bDeviceSubClass:                   0x02  -> This is the Common Class Sub Class
bDeviceProtocol:                   0x01  -> This is the Interface Association Descriptor protocol
bMaxPacketSize0:                   0x40 = (64) Bytes
idVendor:                        0x1161 = Port Denshi Co., Ltd.
idProduct:                       0x1506
bcdDevice:                       0x0006
iManufacturer:                     0x03
String Descriptor for index 3 not available while device is in low power state.
iProduct:                          0x01
String Descriptor for index 1 not available while device is in low power state.
iSerialNumber:                     0x02
String Descriptor for index 2 not available while device is in low power state.
bNumConfigurations:                0x01

          ---===>Open Pipes<===---

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0020 = 1 transactions per microframe, 0x20 max bytes
bInterval:                         0x06

       ---===>Full Configuration Descriptor<===---

          ===>Configuration Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x02
wTotalLength:                    0x0275  -> Validated
bNumInterfaces:                    0x03
bConfigurationValue:               0x01
iConfiguration:                    0x04
String Descriptor for index 4 not available while device is in low power state.
bmAttributes:                      0x80  -> Bus Powered
MaxPower:                          0xFA = 500 mA

          ===>IAD Descriptor<===
bLength:                           0x08
bDescriptorType:                   0x0B
bFirstInterface:                   0x00
bInterfaceCount:                   0x02
bFunctionClass:                    0x0E  -> Video Interface Class
bFunctionSubClass:                 0x03  -> Video Interface Collection
bFunctionProtocol:                 0x00  -> PC_PROTOCOL_UNDEFINED protocol
iFunction:                         0x05
String Descriptor for index 5 not available while device is in low power state.

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x00
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x01  -> Video Control Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x05
String Descriptor for index 5 not available while device is in low power state.

          ===>Class-Specific Video Control Interface Header Descriptor<===
bLength:                           0x0D
bDescriptorType:                   0x24
bDescriptorSubtype:                0x01
bcdUVC:                          0x0110
wTotalLength:                    0x008B  -> Validated
dwClockFreq:                 0x00E4E1C0 = (15000000) Hz
bInCollection:                     0x01
baInterfaceNr[1]:                  0x01
USB Video Class device: spec version 1.1

          ===>Video Control Input Terminal Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x24
bDescriptorSubtype:                0x02
bTerminalID:                       0x01
wTerminalType:                   0x0201 = (ITT_CAMERA)
bAssocTerminal:                    0x00
iTerminal:                         0x00
===>Camera Input Terminal Data
wObjectiveFocalLengthMin:        0x0000
wObjectiveFocalLengthMax:        0x0000
wOcularFocalLength:              0x0000
bControlSize:                      0x03
bmControls : 0x0E 0x00 0x24 
     D00 = 0   no -  Scanning Mode
     D01 = 1  yes -  Auto-Exposure Mode
     D02 = 1  yes -  Auto-Exposure Priority
     D03 = 1  yes -  Exposure Time (Absolute)
     D04 = 0   no -  Exposure Time (Relative)
     D05 = 0   no -  Focus (Absolute)
     D06 = 0   no -  Focus (Relative)
     D07 = 0   no -  Iris (Absolute)
     D08 = 0   no -  Iris (Relative)
     D09 = 0   no -  Zoom (Absolute)
     D10 = 0   no -  Zoom (Relative)
     D11 = 0   no -  PanTilt (Absolute)
     D12 = 0   no -  PanTilt (Relative)
     D13 = 0   no -  Roll (Absolute)
     D14 = 0   no -  Roll (Relative)
     D15 = 0   no -  Reserved
     D16 = 0   no -  Reserved
     D17 = 0   no -  Focus, Auto
     D18 = 1  yes -  Privacy
     D19 = 0   no -  Focus, Simple
     D20 = 0   no -  Window
     D21 = 1  yes -  Region of Interest
     D22 = 0   no -  Reserved
     D23 = 0   no -  Reserved

          ===>Video Control Processing Unit Descriptor<===
bLength:                           0x0C
bDescriptorType:                   0x24
bDescriptorSubtype:                0x05
bUnitID:                           0x02
bSourceID:                         0x01
wMaxMultiplier:                  0x0000
bControlSize:                      0x02
bmControls : 0x7F 0x17 
     D00 = 1  yes -  Brightness
     D01 = 1  yes -  Contrast
     D02 = 1  yes -  Hue
     D03 = 1  yes -  Saturation
     D04 = 1  yes -  Sharpness
     D05 = 1  yes -  Gamma
     D06 = 1  yes -  White Balance Temperature
     D07 = 0   no -  White Balance Component
     D08 = 1  yes -  Backlight Compensation
     D09 = 1  yes -  Gain
     D10 = 1  yes -  Power Line Frequency
     D11 = 0   no -  Hue, Auto
     D12 = 1  yes -  White Balance Temperature, Auto
     D13 = 0   no -  White Balance Component, Auto
     D14 = 0   no -  Digital Multiplier
     D15 = 0   no -  Digital Multiplier Limit
iProcessing :                      0x00
bmVideoStandards :                 0x00 
     D00 = 0   no -  None
     D01 = 0   no -  NTSC  - 525/60
     D02 = 0   no -  PAL   - 625/50
     D03 = 0   no -  SECAM - 625/50
     D04 = 0   no -  NTSC  - 625/50
     D05 = 0   no -  PAL   - 525/60
     D06 = 0   no -  Reserved
     D07 = 0   no -  Reserved

          ===>Video Control Output Terminal Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x24
bDescriptorSubtype:                0x03
bTerminalID:                       0x03
wTerminalType:                   0x0101 = (TT_STREAMING)
bAssocTerminal:                    0x00
bSourceID:                         0x08
iTerminal:                         0x00

          ===>Video Control Extension Unit Descriptor<===
bLength:                           0x1D
bDescriptorType:                   0x24
bDescriptorSubtype:                0x06
bUnitID:                           0x04
guidExtensionCode:                 {1229A78C-47B4-4094-B0CE-DB07386FB938}
bNumControls:                      0x02
bNrInPins:                         0x01
===>List of Connected Units and Terminal ID's
baSourceID[1]:                     0x02
bControlSize:                      0x04
bmControls : 0x00 0x06 0x00 0x00 
     D00 = 0   no -  Vendor-Specific (Optional)
     D01 = 0   no -  Vendor-Specific (Optional)
     D02 = 0   no -  Vendor-Specific (Optional)
     D03 = 0   no -  Vendor-Specific (Optional)
     D04 = 0   no -  Vendor-Specific (Optional)
     D05 = 0   no -  Vendor-Specific (Optional)
     D06 = 0   no -  Vendor-Specific (Optional)
     D07 = 0   no -  Vendor-Specific (Optional)
     D08 = 0   no -  Vendor-Specific (Optional)
     D09 = 1  yes -  Vendor-Specific (Optional)
     D10 = 1  yes -  Vendor-Specific (Optional)
     D11 = 0   no -  Vendor-Specific (Optional)
     D12 = 0   no -  Vendor-Specific (Optional)
     D13 = 0   no -  Vendor-Specific (Optional)
     D14 = 0   no -  Vendor-Specific (Optional)
     D15 = 0   no -  Vendor-Specific (Optional)
     D16 = 0   no -  Vendor-Specific (Optional)
     D17 = 0   no -  Vendor-Specific (Optional)
     D18 = 0   no -  Vendor-Specific (Optional)
     D19 = 0   no -  Vendor-Specific (Optional)
     D20 = 0   no -  Vendor-Specific (Optional)
     D21 = 0   no -  Vendor-Specific (Optional)
     D22 = 0   no -  Vendor-Specific (Optional)
     D23 = 0   no -  Vendor-Specific (Optional)
     D24 = 0   no -  Vendor-Specific (Optional)
     D25 = 0   no -  Vendor-Specific (Optional)
     D26 = 0   no -  Vendor-Specific (Optional)
     D27 = 0   no -  Vendor-Specific (Optional)
     D28 = 0   no -  Vendor-Specific (Optional)
     D29 = 0   no -  Vendor-Specific (Optional)
     D30 = 0   no -  Vendor-Specific (Optional)
     D31 = 0   no -  Vendor-Specific (Optional)
iExtension:                        0x00

          ===>Video Control Extension Unit Descriptor<===
bLength:                           0x1D
bDescriptorType:                   0x24
bDescriptorSubtype:                0x06
bUnitID:                           0x07
guidExtensionCode:                 {26B8105A-0713-4870-979D-DA79444BB68E}
bNumControls:                      0x05
bNrInPins:                         0x01
===>List of Connected Units and Terminal ID's
baSourceID[1]:                     0x04
bControlSize:                      0x04
bmControls : 0x38 0x10 0x10 0x00 
     D00 = 0   no -  Vendor-Specific (Optional)
     D01 = 0   no -  Vendor-Specific (Optional)
     D02 = 0   no -  Vendor-Specific (Optional)
     D03 = 1  yes -  Vendor-Specific (Optional)
     D04 = 1  yes -  Vendor-Specific (Optional)
     D05 = 1  yes -  Vendor-Specific (Optional)
     D06 = 0   no -  Vendor-Specific (Optional)
     D07 = 0   no -  Vendor-Specific (Optional)
     D08 = 0   no -  Vendor-Specific (Optional)
     D09 = 0   no -  Vendor-Specific (Optional)
     D10 = 0   no -  Vendor-Specific (Optional)
     D11 = 0   no -  Vendor-Specific (Optional)
     D12 = 1  yes -  Vendor-Specific (Optional)
     D13 = 0   no -  Vendor-Specific (Optional)
     D14 = 0   no -  Vendor-Specific (Optional)
     D15 = 0   no -  Vendor-Specific (Optional)
     D16 = 0   no -  Vendor-Specific (Optional)
     D17 = 0   no -  Vendor-Specific (Optional)
     D18 = 0   no -  Vendor-Specific (Optional)
     D19 = 0   no -  Vendor-Specific (Optional)
     D20 = 1  yes -  Vendor-Specific (Optional)
     D21 = 0   no -  Vendor-Specific (Optional)
     D22 = 0   no -  Vendor-Specific (Optional)
     D23 = 0   no -  Vendor-Specific (Optional)
     D24 = 0   no -  Vendor-Specific (Optional)
     D25 = 0   no -  Vendor-Specific (Optional)
     D26 = 0   no -  Vendor-Specific (Optional)
     D27 = 0   no -  Vendor-Specific (Optional)
     D28 = 0   no -  Vendor-Specific (Optional)
     D29 = 0   no -  Vendor-Specific (Optional)
     D30 = 0   no -  Vendor-Specific (Optional)
     D31 = 0   no -  Vendor-Specific (Optional)
iExtension:                        0x07
String Descriptor for index 7 not available while device is in low power state.

          ===>Video Control Extension Unit Descriptor<===
bLength:                           0x1D
bDescriptorType:                   0x24
bDescriptorSubtype:                0x06
bUnitID:                           0x08
guidExtensionCode:                 {0F3F95DC-2632-4C4E-92C9-A04782F43BC8}
bNumControls:                      0x00
bNrInPins:                         0x01
===>List of Connected Units and Terminal ID's
baSourceID[1]:                     0x07
bControlSize:                      0x04
bmControls : 0x00 0x00 0x00 0x00 
     D00 = 0   no -  Vendor-Specific (Optional)
     D01 = 0   no -  Vendor-Specific (Optional)
     D02 = 0   no -  Vendor-Specific (Optional)
     D03 = 0   no -  Vendor-Specific (Optional)
     D04 = 0   no -  Vendor-Specific (Optional)
     D05 = 0   no -  Vendor-Specific (Optional)
     D06 = 0   no -  Vendor-Specific (Optional)
     D07 = 0   no -  Vendor-Specific (Optional)
     D08 = 0   no -  Vendor-Specific (Optional)
     D09 = 0   no -  Vendor-Specific (Optional)
     D10 = 0   no -  Vendor-Specific (Optional)
     D11 = 0   no -  Vendor-Specific (Optional)
     D12 = 0   no -  Vendor-Specific (Optional)
     D13 = 0   no -  Vendor-Specific (Optional)
     D14 = 0   no -  Vendor-Specific (Optional)
     D15 = 0   no -  Vendor-Specific (Optional)
     D16 = 0   no -  Vendor-Specific (Optional)
     D17 = 0   no -  Vendor-Specific (Optional)
     D18 = 0   no -  Vendor-Specific (Optional)
     D19 = 0   no -  Vendor-Specific (Optional)
     D20 = 0   no -  Vendor-Specific (Optional)
     D21 = 0   no -  Vendor-Specific (Optional)
     D22 = 0   no -  Vendor-Specific (Optional)
     D23 = 0   no -  Vendor-Specific (Optional)
     D24 = 0   no -  Vendor-Specific (Optional)
     D25 = 0   no -  Vendor-Specific (Optional)
     D26 = 0   no -  Vendor-Specific (Optional)
     D27 = 0   no -  Vendor-Specific (Optional)
     D28 = 0   no -  Vendor-Specific (Optional)
     D29 = 0   no -  Vendor-Specific (Optional)
     D30 = 0   no -  Vendor-Specific (Optional)
     D31 = 0   no -  Vendor-Specific (Optional)
iExtension:                        0x08
String Descriptor for index 8 not available while device is in low power state.

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0020 = 1 transactions per microframe, 0x20 max bytes
bInterval:                         0x06

          ===>Class-specific VC Interrupt Endpoint Descriptor<===
bLength:                           0x05 
bDescriptorType:                   0x25
bDescriptorSubtype:                0x03
wMaxTransferSize:                0x0020 = (32) Bytes

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x00
bNumEndpoints:                     0x00
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Video Class-Specific VS Video Input Header Descriptor<===
bLength:                           0x0F
bDescriptorType:                   0x24
bDescriptorSubtype:                0x01
bNumFormats:                       0x02
wTotalLength:                    0x0131  -> Validated
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmInfo:                            0x00  -> Dynamic Format Change not Supported
bTerminalLink:                     0x03
bStillCaptureMethod:               0x01  -> Still Capture Method 1
bTriggerSupport:                   0x01  -> Hardware Triggering Support
bTriggerUsage:                     0x00  -> Host will initiate still image capture
bControlSize:                      0x01
Video Payload Format 1             0x00 
     D00 = 0   no -  Key Frame Rate
     D01 = 0   no -  P Frame Rate
     D02 = 0   no -  Compression Quality
     D03 = 0   no -  Compression Window Size
     D04 = 0   no -  Generate Key Frame
     D05 = 0   no -  Update Frame Segment
     D06 = 0   no -  Reserved
     D07 = 0   no -  Reserved
Video Payload Format 2             0x00 
     D00 = 0   no -  Key Frame Rate
     D01 = 0   no -  P Frame Rate
     D02 = 0   no -  Compression Quality
     D03 = 0   no -  Compression Window Size
     D04 = 0   no -  Generate Key Frame
     D05 = 0   no -  Update Frame Segment
     D06 = 0   no -  Reserved
     D07 = 0   no -  Reserved

          ===>Video Streaming MJPEG Format Type Descriptor<===
bLength:                           0x0B
bDescriptorType:                   0x24
bDescriptorSubtype:                0x06
bFormatIndex:                      0x01
bNumFrameDescriptors:              0x06
bmFlags:                           0x01  -> Sample Size is Fixed
bDefaultFrameIndex:                0x01
bAspectRatioX:                     0x00
bAspectRatioY:                     0x00
bmInterlaceFlags:                  0x00
     D00   = 0  non-Interlaced stream or variable
     D01   = 0  2 fields per frame
     D02   = 0  Field 1 not first
     D03   = 0  Reserved
     D4..5 = 0  Field patterns  -> Field 1 only
     D6..7 = 0  Display Mode  -> Bob only
bCopyProtect:                      0x00  -> Duplication Unrestricted

          ===>Video Streaming MJPEG Frame Type Descriptor<===
          --->This is the Default (optimum) Frame index
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x07
bFrameIndex:                       0x01
bmCapabilities:                    0x01
wWidth:                          0x0780 = 1920
wHeight:                         0x0438 = 1080
dwMinBitRate:                0x3B538000
dwMaxBitRate:                0x3B538000
dwMaxVideoFrameBufferSize:   0x003F4800
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame TypeData
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Video Streaming MJPEG Frame Type Descriptor<===
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x07
bFrameIndex:                       0x02
bmCapabilities:                    0x01
wWidth:                          0x0500 = 1280
wHeight:                         0x02D0 = 720
dwMinBitRate:                0x1A5E0000
dwMaxBitRate:                0x1A5E0000
dwMaxVideoFrameBufferSize:   0x001C2000
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame TypeData
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Video Streaming MJPEG Frame Type Descriptor<===
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x07
bFrameIndex:                       0x03
bmCapabilities:                    0x01
wWidth:                          0x0280 = 640
wHeight:                         0x0168 = 360
dwMinBitRate:                0x06978000
dwMaxBitRate:                0x06978000
dwMaxVideoFrameBufferSize:   0x00070800
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame TypeData
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Video Streaming MJPEG Frame Type Descriptor<===
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x07
bFrameIndex:                       0x04
bmCapabilities:                    0x01
wWidth:                          0x0280 = 640
wHeight:                         0x01E0 = 480
dwMinBitRate:                0x08CA0000
dwMaxBitRate:                0x08CA0000
dwMaxVideoFrameBufferSize:   0x00096000
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame TypeData
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Video Streaming MJPEG Frame Type Descriptor<===
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x07
bFrameIndex:                       0x05
bmCapabilities:                    0x01
wWidth:                          0x0A00 = 2560
wHeight:                         0x05A0 = 1440
dwMinBitRate:                0x69780000
dwMaxBitRate:                0x69780000
dwMaxVideoFrameBufferSize:   0x00708000
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame TypeData
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Video Streaming MJPEG Frame Type Descriptor<===
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x07
bFrameIndex:                       0x06
bmCapabilities:                    0x01
wWidth:                          0x0A00 = 2560
wHeight:                         0x0780 = 1920
dwMinBitRate:                0x8CA00000
dwMaxBitRate:                0x8CA00000
dwMaxVideoFrameBufferSize:   0x00960000
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame TypeData
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Color Matching Descriptor<===
bLength:                           0x06
bDescriptorType:                   0x24
bDescriptorSubtype:                0x0D
bColorPrimaries:                   0x01
bTransferCharacteristics:          0x01
bMatrixCoefficients:               0x04

          ===>Video Streaming Uncompressed Format Type Descriptor<===
bLength:                           0x1B
bDescriptorType:                   0x24
bDescriptorSubtype:                0x04
bFormatIndex:                      0x02
bNumFrameDescriptors:              0x02
guidFormat:                        {32595559-0000-0010-8000-00AA00389B71} = YUY2 Format
bBitsPerPixel:                     0x10
bDefaultFrameIndex:                0x01
bAspectRatioX:                     0x00
bAspectRatioY:                     0x00
bmInterlaceFlags:                  0x00
     D0    = 0x00 Interlaced stream or variable: No
     D1    = 0x00 Fields per frame: 2 fields
     D2    = 0x00 Field 1 first: No
     D3    = 0x00 Reserved
     D4..5 = 0x00 Field patterns  -> Field 1 only
     D6..7 = 0x00 Display Mode  -> Bob only
bCopyProtect:                      0x00  -> Duplication Unrestricted

          ===>Video Streaming Uncompressed Frame Type Descriptor<===
          --->This is the Default (optimum) Frame index
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x05
bFrameIndex:                       0x01
bmCapabilities:                    0x01
wWidth:                          0x0280 = 640
wHeight:                         0x0168 = 360
dwMinBitRate:                0x06978000
dwMaxBitRate:                0x06978000
dwMaxVideoFrameBufferSize:   0x00070800
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame Type Data
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Video Streaming Uncompressed Frame Type Descriptor<===
bLength:                           0x1E
bDescriptorType:                   0x24
bDescriptorSubtype:                0x05
bFrameIndex:                       0x02
bmCapabilities:                    0x01
wWidth:                          0x0280 = 640
wHeight:                         0x01E0 = 480
dwMinBitRate:                0x08CA0000
dwMaxBitRate:                0x08CA0000
dwMaxVideoFrameBufferSize:   0x00096000
dwDefaultFrameInterval:      0x00051615 = 33.333300 mSec (30.00 Hz)
bFrameIntervalType:                0x01
===>Additional Discrete Frame Type Data
dwFrameInterval[1]:          0x00051615 = 33.333300 mSec (30.00 Hz)

          ===>Color Matching Descriptor<===
bLength:                           0x06
bDescriptorType:                   0x24
bDescriptorSubtype:                0x0D
bColorPrimaries:                   0x01
bTransferCharacteristics:          0x01
bMatrixCoefficients:               0x04

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x01
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x05  -> Isochronous Transfer Type, Synchronization Type = Asynchronous, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0080 = 1 transactions per microframe, 0x80 max bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x02
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x05  -> Isochronous Transfer Type, Synchronization Type = Asynchronous, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0200 = 1 transactions per microframe, 0x200 max bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x03
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x05  -> Isochronous Transfer Type, Synchronization Type = Asynchronous, Usage Type = Data Endpoint
wMaxPacketSize:                  0x03FC = 1 transactions per microframe, 0x3FC max bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x04
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x05  -> Isochronous Transfer Type, Synchronization Type = Asynchronous, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0B00 = 2 transactions per microframe, 0x300 max bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x05
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x05  -> Isochronous Transfer Type, Synchronization Type = Asynchronous, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0BFC = 2 transactions per microframe, 0x3FC max bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x06
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x05  -> Isochronous Transfer Type, Synchronization Type = Asynchronous, Usage Type = Data Endpoint
wMaxPacketSize:                  0x1380 = 3 transactions per microframe, 0x380 max bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x07
bNumEndpoints:                     0x01
bInterfaceClass:                   0x0E  -> Video Interface Class
bInterfaceSubClass:                0x02  -> Video Streaming Interface SubClass
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x05  -> Isochronous Transfer Type, Synchronization Type = Asynchronous, Usage Type = Data Endpoint
wMaxPacketSize:                  0x13FC = 3 transactions per microframe, 0x3FC max bytes
bInterval:                         0x01

          ===>IAD Descriptor<===
bLength:                           0x08
bDescriptorType:                   0x0B
bFirstInterface:                   0x02
bInterfaceCount:                   0x01
*!*ERROR:  bInterfaceCount must be greater than 1 
bFunctionClass:                    0xFE  -> This is an Application Specific USB Device Interface Class
  -> This is a Device Firmware Application Specific USB Device Interface Class
bFunctionSubClass:                 0x01
bFunctionProtocol:                 0x00
iFunction:                         0x0B
String Descriptor for index 11 not available while device is in low power state.

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x02
bAlternateSetting:                 0x00
bNumEndpoints:                     0x00
bInterfaceClass:                   0xFE  -> This is an Application Specific USB Device Interface Class
  -> This is a Device Firmware Application Specific USB Device Interface Class
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x0B
String Descriptor for index 11 not available while device is in low power state.

          ===>HID Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x21
bcdHID:                          0xC80F
bCountryCode:                      0x00
bNumDescriptors:                   0x00

          ===>Additional Error Checking<===
PASS: number of uncompressed-frame frame descriptors (2) == number of frame descriptors (2) specified in uncompressed format descriptor(s)
PASS: number of MJPEG frame descriptors (6) == number of frame descriptors (6) specified in MJPEG format descriptor(s)

          ===>BOS Descriptor<===
bLength:                           0x05
bDescriptorType:                   0x0F
wTotalLength:                      0x0029
bNumDeviceCaps:                    0x02

          ===>Platform Capability Descriptor<===
bLength:                           0x1C
bDescriptorType:                   0x10
bDevCapabilityType:                0x05
bReserved:                         0x00
Platform Capability UUID:          D8DD60DF-4589-4CC7-9CD2-659D9E648A9F
00 00 03 06 E2 02 15 00 

          ===>Unknown Capability Descriptor<===
bLength:                           0x08
bDescriptorType:                   0x10
bDevCapabilityType:                0x11
01 03 00 00 00 
[Port2] 


Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            2
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&23eae154&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port3] 


Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            13
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&262a0829&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port4]  :  通用 USB 集线器


External Hub: USB#VID_03F0&PID_0BB9#5&33c730ea&0&4#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            4
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&23eae154&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

Hub Power:                    Self Power
Hub type:                     USB 2.0 Hub
Number of Ports:              4
Power switching:              Individual
Compound device:              Yes
Over-current Protection:      Individual

High speed capable:           Yes
High speed:                   Yes
Multiple transaction translations capable:                 Yes
Performs multiple transaction translations simultaneously: Yes
Hub wakes when device is connected:                        No
Hub is bus powered:           No
Hub is root:                  No
       ---===>Device Information<===---
English product name: "USB2.1 Hub"

ConnectionStatus:                  
Current Config Value:              0x01  -> Device Bus Speed: High (is SuperSpeed or higher capable)
Device Address:                    0x3E
Open Pipes:                           1

          ===>Device Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x01
bcdUSB:                          0x0210
bDeviceClass:                      0x09  -> This is a HUB Device
bDeviceSubClass:                   0x00
bDeviceProtocol:                   0x02
bMaxPacketSize0:                   0x40 = (64) Bytes
idVendor:                        0x03F0 = HP Inc.
idProduct:                       0x0BB9
bcdDevice:                       0x6954
iManufacturer:                     0x01
     English (United States)  "GenesysLogic"
iProduct:                          0x02
     English (United States)  "USB2.1 Hub"
iSerialNumber:                     0x00
bNumConfigurations:                0x01

          ---===>Open Pipes<===---

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0001 = 1 transactions per microframe, 0x01 max bytes
bInterval:                         0x0C

       ---===>Full Configuration Descriptor<===---

          ===>Configuration Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x02
wTotalLength:                    0x0029  -> Validated
bNumInterfaces:                    0x01
bConfigurationValue:               0x01
iConfiguration:                    0x00
bmAttributes:                      0xE0  -> Self Powered
  -> Remote Wakeup
MaxPower:                          0x00 =   0 mA

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x00
bNumEndpoints:                     0x01
bInterfaceClass:                   0x09  -> HUB Interface Class
bInterfaceSubClass:                0x00
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0001 = 1 transactions per microframe, 0x01 max bytes
bInterval:                         0x0C

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x01
bNumEndpoints:                     0x01
bInterfaceClass:                   0x09  -> HUB Interface Class
bInterfaceSubClass:                0x00
bInterfaceProtocol:                0x02
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0001 = 1 transactions per microframe, 0x01 max bytes
bInterval:                         0x0C

          ===>BOS Descriptor<===
bLength:                           0x05
bDescriptorType:                   0x0F
wTotalLength:                      0x002A
bNumDeviceCaps:                    0x03

          ===>USB 2.0 Extension Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x10
bDevCapabilityType:                0x02
bmAttributes:                      0x00000006  -> Supports Link Power Management protocol

          ===>SuperSpeed USB Device Capability Descriptor<===
bLength:                           0x0A
bDescriptorType:                   0x10
bDevCapabilityType:                0x03
bmAttributes:                      0x00
wSpeedsSupported:                  0x0E
  -> Supports full-speed operation
  -> Supports high-speed operation
  -> Supports SuperSpeed operation
bFunctionalitySupport:             0x01 -> lowest speed = full-speed
bU1DevExitLat:                     0x08 -> less than 8 micro-seconds
wU2DevExitLat:                     0x00BE -> less than 190 micro-seconds

          ===>Container ID Capability Descriptor<===
bLength:                           0x14
bDescriptorType:                   0x10
bDevCapabilityType:                0x04
bReserved:                         0x00
Container ID:                      72E5EE9B-0DDE-F147-AB72-9B7F82C25D21
[Port1]  :  通用 USB 集线器


External Hub: USB#VID_03F0&PID_0CB9#6&248f3574&0&1#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

Hub Power:                    Self Power
Hub type:                     USB 2.0 Hub
Number of Ports:              5
Power switching:              Individual
Compound device:              Yes
Over-current Protection:      Individual

High speed capable:           Yes
High speed:                   Yes
Multiple transaction translations capable:                 Yes
Performs multiple transaction translations simultaneously: Yes
Hub wakes when device is connected:                        No
Hub is bus powered:           No
Hub is root:                  No
       ---===>Device Information<===---
English product name: "USB2.1 Hub"

ConnectionStatus:                  
Current Config Value:              0x01  -> Device Bus Speed: High (is SuperSpeed or higher capable)
Device Address:                    0x16
Open Pipes:                           1

          ===>Device Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x01
bcdUSB:                          0x0210
bDeviceClass:                      0x09  -> This is a HUB Device
bDeviceSubClass:                   0x00
bDeviceProtocol:                   0x02
bMaxPacketSize0:                   0x40 = (64) Bytes
idVendor:                        0x03F0 = HP Inc.
idProduct:                       0x0CB9
bcdDevice:                       0x6966
iManufacturer:                     0x01
     English (United States)  "GenesysLogic"
iProduct:                          0x02
     English (United States)  "USB2.1 Hub"
iSerialNumber:                     0x00
bNumConfigurations:                0x01

          ---===>Open Pipes<===---

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0001 = 1 transactions per microframe, 0x01 max bytes
bInterval:                         0x0C

       ---===>Full Configuration Descriptor<===---

          ===>Configuration Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x02
wTotalLength:                    0x0029  -> Validated
bNumInterfaces:                    0x01
bConfigurationValue:               0x01
iConfiguration:                    0x00
bmAttributes:                      0xE0  -> Self Powered
  -> Remote Wakeup
MaxPower:                          0x00 =   0 mA

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x00
bNumEndpoints:                     0x01
bInterfaceClass:                   0x09  -> HUB Interface Class
bInterfaceSubClass:                0x00
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0001 = 1 transactions per microframe, 0x01 max bytes
bInterval:                         0x0C

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x01
bNumEndpoints:                     0x01
bInterfaceClass:                   0x09  -> HUB Interface Class
bInterfaceSubClass:                0x00
bInterfaceProtocol:                0x02
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0001 = 1 transactions per microframe, 0x01 max bytes
bInterval:                         0x0C

          ===>BOS Descriptor<===
bLength:                           0x05
bDescriptorType:                   0x0F
wTotalLength:                      0x002A
bNumDeviceCaps:                    0x03

          ===>USB 2.0 Extension Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x10
bDevCapabilityType:                0x02
bmAttributes:                      0x00000006  -> Supports Link Power Management protocol

          ===>SuperSpeed USB Device Capability Descriptor<===
bLength:                           0x0A
bDescriptorType:                   0x10
bDevCapabilityType:                0x03
bmAttributes:                      0x00
wSpeedsSupported:                  0x0E
  -> Supports full-speed operation
  -> Supports high-speed operation
  -> Supports SuperSpeed operation
bFunctionalitySupport:             0x01 -> lowest speed = full-speed
bU1DevExitLat:                     0x08 -> less than 8 micro-seconds
wU2DevExitLat:                     0x00BE -> less than 190 micro-seconds

          ===>Container ID Capability Descriptor<===
bLength:                           0x14
bDescriptorType:                   0x10
bDevCapabilityType:                0x04
bReserved:                         0x00
Container ID:                      46017FF6-79EA-1749-BDD2-44C77934CC18
[Port1] 


Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port2] 


Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port3] 


Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port4] 


Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port5]  :  USB 输入设备


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

Device Power State:               PowerDeviceD0

       ---===>Device Information<===---
English product name: "USB_HID_DEVICE"

ConnectionStatus:                  
Current Config Value:              0x01  -> Device Bus Speed: High (is not SuperSpeed or higher capable)
Device Address:                    0x21
Open Pipes:                           1

          ===>Device Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x01
bcdUSB:                          0x0200
bDeviceClass:                      0x00  -> This is an Interface Class Defined Device
bDeviceSubClass:                   0x00
bDeviceProtocol:                   0x00
bMaxPacketSize0:                   0x40 = (64) Bytes
idVendor:                        0x05E3 = Genesys Logic, Inc.
idProduct:                       0x0102
bcdDevice:                       0x0100
iManufacturer:                     0x00
iProduct:                          0x01
     English (United States)  "USB_HID_DEVICE"
iSerialNumber:                     0x02
*!*ERROR:  No String Descriptor for index 2!
bNumConfigurations:                0x01

          ---===>Open Pipes<===---

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0040 = 1 transactions per microframe, 0x40 max bytes
bInterval:                         0x08

       ---===>Full Configuration Descriptor<===---

          ===>Configuration Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x02
wTotalLength:                    0x0022  -> Validated
bNumInterfaces:                    0x01
bConfigurationValue:               0x01
iConfiguration:                    0x00
bmAttributes:                      0x80  -> Bus Powered
MaxPower:                          0x32 = 100 mA

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x00
bNumEndpoints:                     0x01
bInterfaceClass:                   0x03  -> HID Interface Class
bInterfaceSubClass:                0x00
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>HID Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x21
bcdHID:                          0x0101
bCountryCode:                      0x00
bNumDescriptors:                   0x01
bDescriptorType:                   0x22 (Report Descriptor)
wDescriptorLength:               0x0019

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0040 = 1 transactions per microframe, 0x40 max bytes
bInterval:                         0x08
[Port2]  :  Realtek USB GbE Family Controller


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

Device Power State:               PowerDeviceD0

       ---===>Device Information<===---
English product name: "USB 10/100/1000 LAN"

ConnectionStatus:                  
Current Config Value:              0x01  -> Device Bus Speed: High (is SuperSpeed or higher capable)
Device Address:                    0x1C
Open Pipes:                           3

          ===>Device Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x01
bcdUSB:                          0x0210
bDeviceClass:                      0x00  -> This is an Interface Class Defined Device
bDeviceSubClass:                   0x00
bDeviceProtocol:                   0x00
bMaxPacketSize0:                   0x40 = (64) Bytes
idVendor:                        0x0BDA = Realtek Semiconductor Corp.
idProduct:                       0x8153
bcdDevice:                       0x3201
iManufacturer:                     0x01
     English (United States)  "Realtek"
iProduct:                          0x02
     English (United States)  "USB 10/100/1000 LAN"
iSerialNumber:                     0x06
     English (United States)  "102000001"
bNumConfigurations:                0x02
*!*CAUTION:    Most host controllers will only work with one configuration per speed

          ---===>Open Pipes<===---

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0200 = 0x200 max bytes
bInterval:                         0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x02  -> Direction: OUT - EndpointID: 2
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0200 = 0x200 max bytes
bInterval:                         0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0002 = 1 transactions per microframe, 0x02 max bytes
bInterval:                         0x0B

       ---===>Full Configuration Descriptor<===---

          ===>Configuration Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x02
wTotalLength:                    0x0027  -> Validated
bNumInterfaces:                    0x01
bConfigurationValue:               0x01
iConfiguration:                    0x00
bmAttributes:                      0xA0  -> Bus Powered
  -> Remote Wakeup
MaxPower:                          0xAF = 350 mA

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x00
bNumEndpoints:                     0x03
bInterfaceClass:                   0xFF  -> Interface Class Unknown to USBView
bInterfaceSubClass:                0xFF
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0200 = 0x200 max bytes
bInterval:                         0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x02  -> Direction: OUT - EndpointID: 2
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0200 = 0x200 max bytes
bInterval:                         0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0002 = 1 transactions per microframe, 0x02 max bytes
bInterval:                         0x0B

          ===>BOS Descriptor<===
bLength:                           0x05
bDescriptorType:                   0x0F
wTotalLength:                      0x0016
bNumDeviceCaps:                    0x02

          ===>USB 2.0 Extension Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x10
bDevCapabilityType:                0x02
bmAttributes:                      0x00000006  -> Supports Link Power Management protocol

          ===>SuperSpeed USB Device Capability Descriptor<===
bLength:                           0x0A
bDescriptorType:                   0x10
bDevCapabilityType:                0x03
bmAttributes:                      0x02
  -> capable of generating Latency Tolerance Messages
wSpeedsSupported:                  0x0E
  -> Supports full-speed operation
  -> Supports high-speed operation
  -> Supports SuperSpeed operation
bFunctionalitySupport:             0x02 -> lowest speed = high-speed
bU1DevExitLat:                     0x0A -> less than 10 micro-seconds
wU2DevExitLat:                     0x07FF -> less than 2047 micro-seconds
[Port3] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port4]  :  USB 输入设备


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

Device Power State:               PowerDeviceD3

       ---===>Device Information<===---
String Descriptor for index 1 not available while device is in low power state.

ConnectionStatus:                  
Current Config Value:              0x01  -> Device Bus Speed: High (is not SuperSpeed or higher capable)
Device Address:                    0x1F
Open Pipes:                           1

          ===>Device Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x01
bcdUSB:                          0x0200
bDeviceClass:                      0x00  -> This is an Interface Class Defined Device
bDeviceSubClass:                   0x00
bDeviceProtocol:                   0x00
bMaxPacketSize0:                   0x40 = (64) Bytes
idVendor:                        0x05E3 = Genesys Logic, Inc.
idProduct:                       0x0102
bcdDevice:                       0x0100
iManufacturer:                     0x00
iProduct:                          0x01
String Descriptor for index 1 not available while device is in low power state.
iSerialNumber:                     0x02
String Descriptor for index 2 not available while device is in low power state.
bNumConfigurations:                0x01

          ---===>Open Pipes<===---

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0040 = 1 transactions per microframe, 0x40 max bytes
bInterval:                         0x08

       ---===>Full Configuration Descriptor<===---

          ===>Configuration Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x02
wTotalLength:                    0x0022  -> Validated
bNumInterfaces:                    0x01
bConfigurationValue:               0x01
iConfiguration:                    0x00
bmAttributes:                      0x80  -> Bus Powered
MaxPower:                          0x32 = 100 mA

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x00
bNumEndpoints:                     0x01
bInterfaceClass:                   0x03  -> HID Interface Class
bInterfaceSubClass:                0x00
bInterfaceProtocol:                0x00
iInterface:                        0x00

          ===>HID Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x21
bcdHID:                          0x0101
bCountryCode:                      0x00
bNumDescriptors:                   0x01
bDescriptorType:                   0x22 (Report Descriptor)
wDescriptorLength:               0x0019

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0040 = 1 transactions per microframe, 0x40 max bytes
bInterval:                         0x08
[Port5] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port6] 


Is Port User Connectable:         yes
Is Port Debug Capable:            no
Companion Port Number:            14
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&262a0829&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port7] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port8] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port9] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port10]  :  英特尔(R) 无线 Bluetooth(R)


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

Device Power State:               PowerDeviceD2

       ---===>Device Information<===---

ConnectionStatus:                  
Current Config Value:              0x01  -> Device Bus Speed: Full (is not SuperSpeed or higher capable)
Device Address:                    0x02
Open Pipes:                           5

          ===>Device Descriptor<===
bLength:                           0x12
bDescriptorType:                   0x01
bcdUSB:                          0x0201
bDeviceClass:                      0xE0  -> This is a Wireless Controller(Bluetooth) Device
bDeviceSubClass:                   0x01
*!*ERROR:  bDeviceSubClass of 1 is invalid
bDeviceProtocol:                   0x01
bMaxPacketSize0:                   0x40 = (64) Bytes
idVendor:                        0x8087 = Intel
idProduct:                       0x0033
bcdDevice:                       0x0000
iManufacturer:                     0x00
iProduct:                          0x00
iSerialNumber:                     0x00
bNumConfigurations:                0x01

          ---===>Open Pipes<===---

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0040 = 0x40 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x02  -> Direction: OUT - EndpointID: 2
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0040 = 0x40 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x82  -> Direction: IN - EndpointID: 2
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0040 = 0x40 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0000 = 0x00 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0000 = 0x00 bytes
bInterval:                         0x01

       ---===>Full Configuration Descriptor<===---

          ===>Configuration Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x02
wTotalLength:                    0x00C8  -> Validated
bNumInterfaces:                    0x02
bConfigurationValue:               0x01
iConfiguration:                    0x00
bmAttributes:                      0xE0  -> Self Powered
  -> Remote Wakeup
MaxPower:                          0x32 = 100 mA

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x00
bAlternateSetting:                 0x00
bNumEndpoints:                     0x03
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x81  -> Direction: IN - EndpointID: 1
bmAttributes:                      0x03  -> Interrupt Transfer Type
wMaxPacketSize:                  0x0040 = 0x40 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x02  -> Direction: OUT - EndpointID: 2
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0040 = 0x40 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x82  -> Direction: IN - EndpointID: 2
bmAttributes:                      0x02  -> Bulk Transfer Type
wMaxPacketSize:                  0x0040 = 0x40 bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x00
bNumEndpoints:                     0x02
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0000 = 0x00 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0000 = 0x00 bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x01
bNumEndpoints:                     0x02
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0009 = 0x09 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0009 = 0x09 bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x02
bNumEndpoints:                     0x02
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0011 = 0x11 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0011 = 0x11 bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x03
bNumEndpoints:                     0x02
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0019 = 0x19 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0019 = 0x19 bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x04
bNumEndpoints:                     0x02
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0021 = 0x21 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0021 = 0x21 bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x05
bNumEndpoints:                     0x02
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0031 = 0x31 bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x0031 = 0x31 bytes
bInterval:                         0x01

          ===>Interface Descriptor<===
bLength:                           0x09
bDescriptorType:                   0x04
bInterfaceNumber:                  0x01
bAlternateSetting:                 0x06
bNumEndpoints:                     0x02
bInterfaceClass:                   0xE0  -> This is a Wireless RF Controller USB Device Interface Class with Bluetooth Programming Interface
bInterfaceSubClass:                0x01
bInterfaceProtocol:                0x01
iInterface:                        0x00

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x03  -> Direction: OUT - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x003F = 0x3F bytes
bInterval:                         0x01

          ===>Endpoint Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x05
bEndpointAddress:                  0x83  -> Direction: IN - EndpointID: 3
bmAttributes:                      0x01  -> Isochronous Transfer Type, Synchronization Type = No Synchronization, Usage Type = Data Endpoint
wMaxPacketSize:                  0x003F = 0x3F bytes
bInterval:                         0x01

          ===>BOS Descriptor<===
bLength:                           0x05
bDescriptorType:                   0x0F
wTotalLength:                      0x000C
bNumDeviceCaps:                    0x01

          ===>USB 2.0 Extension Descriptor<===
bLength:                           0x07
bDescriptorType:                   0x10
bDevCapabilityType:                0x02
bmAttributes:                      0x0000040E  -> Supports Link Power Management protocol
[Port11] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port12] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port13] 


Is Port User Connectable:         yes
Is Port Debug Capable:            yes
Companion Port Number:            3
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&262a0829&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         no
 USB 2.0:                         no
 USB 3.0:                         yes

ConnectionStatus:      NoDeviceConnected
[Port14] 


Is Port User Connectable:         yes
Is Port Debug Capable:            yes
Companion Port Number:            6
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&262a0829&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         no
 USB 2.0:                         no
 USB 3.0:                         yes

ConnectionStatus:      NoDeviceConnected
[Port15] 


Is Port User Connectable:         no
Is Port Debug Capable:            yes
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         no
 USB 2.0:                         no
 USB 3.0:                         yes

ConnectionStatus:      NoDeviceConnected
[Port16] 


Is Port User Connectable:         no
Is Port Debug Capable:            yes
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         no
 USB 2.0:                         no
 USB 3.0:                         yes

ConnectionStatus:      NoDeviceConnected
符合 USB xHCI 的主机控制器


DriverKey: {36fc9e60-c465-11cf-8056-444553540000}\\0000
VendorID: 8086
DeviceID: A71E
SubSysID: 8B41103C
Revision: 01

Debug Port Number:  0
Bus.Device.Function (in decimal): 0.13.0

Host Controller Power State Mappings
System State		Host Controller		Root Hub	USB wakeup	Powered
S0 (working)    	D0              	S? (unmapped)   		
S1 (sleep)      	D? (unspecified)	D3              		
S2 (sleep)      	D? (unspecified)	D3              		
S3 (sleep)      	D3              	D2              Yes		Yes
S4 (Hibernate)  	D3              	D2              Yes		Yes
Last Sleep State	S? (unmapped)   
RootHub


Root Hub: USB#ROOT_HUB30#4&23eae154&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Hub Power:                    Self Power
Number of Ports:              4
Power switching:              Ganged
Compound device:              No
Over-current Protection:      Global
High speed capable:           No
High speed:                   Yes
Multiple transaction translations capable:                 No
Performs multiple transaction translations simultaneously: No
Hub wakes when device is connected:                        No
Hub is bus powered:           No
Hub is root:                  Yes
[Port1] 


Is Port User Connectable:         no
Is Port Debug Capable:            no
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         yes
 USB 2.0:                         yes
 USB 3.0:                         no

ConnectionStatus:      NoDeviceConnected
[Port2] 


Is Port User Connectable:         yes
Is Port Debug Capable:            yes
Companion Port Number:            2
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&262a0829&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         no
 USB 2.0:                         no
 USB 3.0:                         yes

ConnectionStatus:      NoDeviceConnected
[Port3] 


Is Port User Connectable:         no
Is Port Debug Capable:            yes
Companion Port Number:            0
Companion Hub Symbolic Link Name: 
Protocols Supported:
 USB 1.1:                         no
 USB 2.0:                         no
 USB 3.0:                         yes

ConnectionStatus:      NoDeviceConnected
[Port4] 


Is Port User Connectable:         yes
Is Port Debug Capable:            yes
Companion Port Number:            4
Companion Hub Symbolic Link Name: USB#ROOT_HUB30#4&262a0829&0&0#{f18a0e88-c30c-11d0-8815-00a0c906bed8}
Protocols Supported:
 USB 1.1:                         no
 USB 2.0:                         no
 USB 3.0:                         yes

ConnectionStatus:      NoDeviceConnected
`;
