db = db.getSiblingDB("image_db");

db.users.drop()

db.users.insertMany([{
  "name" : "admin",
  "password" : "newadmin"
}])

db.imagemetadata.drop();

db.imagemetadata.insertMany([{
  "SerialNumber": "2871207784",
  "FocalPlaneXResolution": "4286.66",
  "MeteringMode": "5",
  "ExposureMode": "1",
  "SubsecTimeOriginal": "87",
  "BodySerialNumber": "2871207784",
  "ISOSpeedRatings": "100",
  "FlashCompensation": "0",
  "WhiteBalance": "1",
  "SubsecTimeDigitized": "87",
  "ExposureTime": "0.1",
  "PixelYDimension": "2592",
  "ImageNumber": "0",
  "FocalLength": "50",
  "SceneCaptureType": "0",
  "Firmware": "1.2.5",
  "FocalPlaneResolutionUnit": "2",
  "Flash": "16",
  "CustomRendered": "0",
  "PixelXDimension": "3888",
  "ExposureProgram": "1",
  "ExposureBiasValue": "0",
  "ShutterSpeedValue": "3.32193",
  "DateTimeDigitized": "2013:01:23 14:36:15",
  "DateTimeOriginal": "2013:01:23 14:36:15",
  "SensitivityType": "0",
  "FocalPlaneYResolution": "4356.3",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "300",
  "Content-Length": "450555",
  "DigitalCreationDate": "20130123",
  "DigitalCreationTime": "143615",
  "TimeCreated": "143615",
  "DateCreated": "20130123",
  "DPIHeight": "300",
  "Model": "Canon EOS 7D",
  "XResolution": "300",
  "PixelWidth": "3888",
  "PixelHeight": "2592"
},{
  "SerialNumber": "1380532273",
  "FocalPlaneXResolution": "5315.44",
  "MeteringMode": "2",
  "ExposureMode": "0",
  "FlashCompensation": "0",
  "WhiteBalance": "0",
  "ShutterSpeedValue": "8.96578",
  "ExposureTime": "0.002",
  "Flash": "16",
  "DateTimeOriginal": "2014:08:12 16:34:27",
  "FocalLength": "250",
  "ISOSpeedRatings": "400",
  "SubsecTimeOriginal": "65",
  "FocalPlaneResolutionUnit": "2",
  "CustomRendered": "0",
  "ExposureProgram": "2",
  "SceneCaptureType": "0",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2014:08:12 16:34:27",
  "BodySerialNumber": "1380532273",
  "FocalPlaneYResolution": "5342.33",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "DPIWidth": "72",
  "Content-Length": "6842139",
  "DateCreated": "20140812",
  "DPIHeight": "72",
  "Model": "Canon EOS 500D",
  "XResolution": "72",
  "PixelWidth": "4752",
  "PixelHeight": "3168"
},{
  "ColorModel": "RGB",
  "FocalPlaneXResolution": "5798.66",
  "MeteringMode": "5",
  "ExposureMode": "0",
  "SubsecTimeOriginal": "51",
  "SubsecTimeDigitized": "51",
  "ExposureTime": "0.00625",
  "WhiteBalance": "0",
  "DateTimeOriginal": "2014:02:18 02:36:24",
  "FocalLength": "18",
  "DateTimeDigitized": "2014:02:18 02:36:24",
  "SceneCaptureType": "0",
  "FocalPlaneResolutionUnit": "2",
  "ISOSpeedRatings": "100",
  "ExposureProgram": "0",
  "PixelXDimension": "5184",
  "Flash": "16",
  "ExposureBiasValue": "0",
  "ShutterSpeedValue": "7.375",
  "PixelYDimension": "3456",
  "FocalPlaneYResolution": "5788.9",
  "Depth": "8",
  "Output": "",
  "Content-Type": "image/jpeg",
  "DPIWidth": "72",
  "Content-Length": "3351896",
  "DPIHeight": "72",
  "Model": "Canon EOS 650D",
  "XResolution": "72",
  "PixelWidth": "5184",
  "PixelHeight": "3456"
},{
  "ExposureProgram": "3",
  "SubsecTimeDigitized": "00",
  "ExposureTime": "0.005",
  "ImageNumber": "8019",
  "BodySerialNumber": "6853530",
  "SubsecTimeOriginal": "00",
  "PixelXDimension": "3600",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2012:12:08 04:50:47",
  "ExposureMode": "0",
  "WhiteBalance": "0",
  "ShutterSpeedValue": "7.64386",
  "SceneCaptureType": "0",
  "ISOSpeedRatings": "100",
  "DateTimeOriginal": "2012:12:08 04:50:47",
  "Flash": "0",
  "PixelYDimension": "2391",
  "FocalLength": "70",
  "MeteringMode": "2",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "240",
  "Content-Length": "7030265",
  "TimeCreated": "045047",
  "DateCreated": "20121208",
  "DPIHeight": "240",
  "XResolution": "240",
  "Model": "NIKON D90",
  "PixelWidth": "3600",
  "PixelHeight": "2391"
},{
  "FocalPlaneXResolution": "3942.51",
  "MeteringMode": "5",
  "CustomRendered": "0",
  "ExposureProgram": "1",
  "FlashCompensation": "0",
  "SubsecTimeDigitized": "56",
  "ExposureTime": "0.3",
  "ImageNumber": "0",
  "BodySerialNumber": "022021007988",
  "SubsecTimeOriginal": "56",
  "PixelXDimension": "5422",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2013:06:17 10:14:10",
  "ExposureMode": "1",
  "WhiteBalance": "1",
  "ISOSpeedRatings": "800",
  "DateTimeOriginal": "2013:06:17 10:14:10",
  "ShutterSpeedValue": "1.625",
  "FocalLength": "50",
  "FocalPlaneResolutionUnit": "2",
  "SceneCaptureType": "0",
  "Flash": "16",
  "PixelYDimension": "3050",
  "Firmware": "1.1.3",
  "SensitivityType": "2",
  "FocalPlaneYResolution": "3950.62",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "72",
  "Content-Length": "1003643",
  "TimeCreated": "101410",
  "DateCreated": "20130617",
  "DPIHeight": "72",
  "XResolution": "72",
  "Model": "Canon EOS 5D Mark III",
  "PixelWidth": "5422",
  "PixelHeight": "3050"
},{
  "PixelXDimension": "5184",
  "PixelYDimension": "3456",
  "Content-Type": "image/jpeg",
  "DPIWidth": "72",
  "Content-Length": "2574633",
  "Depth": "8",
  "Output": "",
  "PixelHeight": "3456",
  "PixelWidth": "5184",
  "ColorModel": "RGB",
  "DPIHeight": "72"
},{
  "DPIHeight": "72",
  "MeteringMode": "5",
  "SubsecTimeDigitized": "749",
  "WhiteBalance": "0",
  "PixelYDimension": "3150",
  "ShutterSpeedValue": "10.7492",
  "Flash": "0",
  "DateTimeOriginal": "2015:03:21 16:56:13",
  "FocalLength": "4.15",
  "ISOSpeedRatings": "32",
  "PixelXDimension": "6768",
  "SceneCaptureType": "0",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2015:03:21 16:56:13",
  "ExposureTime": "0.000581058",
  "Depth": "8",
  "ColorModel": "RGB",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "72",
  "Content-Length": "5421800",
  "DateCreated": "20150321",
  "TimeCreated": "165613",
  "PixelHeight": "3150",
  "XResolution": "72",
  "Model": "iPhone 6",
  "PixelWidth": "6768"
},{
  "MeteringMode": "3",
  "CustomRendered": "0",
  "ExposureProgram": "3",
  "SubsecTimeDigitized": "80",
  "ExposureTime": "0.003125",
  "DateTimeOriginal": "2012:11:02 14:22:58",
  "FocalLength": "145",
  "SubsecTimeOriginal": "80",
  "PixelXDimension": "4096",
  "DateTimeDigitized": "2012:11:02 14:22:58",
  "ExposureMode": "0",
  "WhiteBalance": "0",
  "SceneCaptureType": "0",
  "Flash": "0",
  "ISOSpeedRatings": "1600",
  "PixelYDimension": "2731",
  "ExposureBiasValue": "0",
  "Output": "",
  "Content-Type": "image/jpeg",
  "DPIWidth": "300",
  "Content-Length": "2777723",
  "Depth": "8",
  "PixelHeight": "2731",
  "Model": "NIKON D3100",
  "XResolution": "300",
  "PixelWidth": "4096",
  "ColorModel": "RGB",
  "DPIHeight": "300"
},{
  "FocalPlaneXResolution": "3849.21",
  "WhiteBalance": "0",
  "CustomRendered": "0",
  "ExposureProgram": "3",
  "FlashCompensation": "0",
  "SubsecTimeDigitized": "33",
  "ExposureTime": "0.004",
  "DateTimeOriginal": "2014:09:27 17:26:08",
  "FocalLength": "50",
  "SubsecTimeOriginal": "33",
  "PixelXDimension": "3600",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2014:09:27 17:26:08",
  "ExposureMode": "0",
  "ISOSpeedRatings": "100",
  "ImageNumber": "0",
  "SceneCaptureType": "0",
  "FocalPlaneResolutionUnit": "2",
  "MeteringMode": "2",
  "BodySerialNumber": "462316894",
  "Flash": "16",
  "ShutterSpeedValue": "7.96578",
  "PixelYDimension": "2400",
  "Firmware": "2.1.2",
  "FocalPlaneYResolution": "3908.14",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "240",
  "Content-Length": "4130844",
  "TimeCreated": "172608",
  "DateCreated": "20140927",
  "DPIHeight": "240",
  "XResolution": "240",
  "Model": "Canon EOS 5D Mark II",
  "PixelWidth": "3600",
  "PixelHeight": "2400"
},{
  "CustomRendered": "0",
  "ExposureProgram": "2",
  "SubsecTimeDigitized": "65",
  "ExposureTime": "0.0025",
  "ImageNumber": "88966",
  "FocalLength": "35",
  "PixelXDimension": "3600",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2015:01:25 19:47:54",
  "ExposureMode": "0",
  "WhiteBalance": "0",
  "ShutterSpeedValue": "8.64386",
  "SceneCaptureType": "0",
  "ISOSpeedRatings": "100",
  "DateTimeOriginal": "2015:01:25 19:47:54",
  "MeteringMode": "2",
  "SubsecTimeOriginal": "65",
  "Flash": "0",
  "PixelYDimension": "2025",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "240",
  "Content-Length": "6727656",
  "TimeCreated": "194754",
  "DateCreated": "20150125",
  "DPIHeight": "240",
  "XResolution": "240",
  "Model": "NIKON D200",
  "PixelWidth": "3600",
  "PixelHeight": "2025"
},{
  "SerialNumber": "1720700480",
  "FocalPlaneXResolution": "5315.44",
  "MeteringMode": "5",
  "CustomRendered": "0",
  "ExposureProgram": "3",
  "FlashCompensation": "0",
  "SubsecTimeDigitized": "86",
  "ExposureTime": "0.02",
  "ImageNumber": "0",
  "FocalLength": "50",
  "SubsecTimeOriginal": "86",
  "PixelXDimension": "4476",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2014:01:19 15:44:34",
  "ExposureMode": "0",
  "ISOSpeedRatings": "125",
  "SceneCaptureType": "0",
  "FocalPlaneResolutionUnit": "2",
  "WhiteBalance": "0",
  "Firmware": "1.0.9",
  "Flash": "16",
  "ShutterSpeedValue": "5.625",
  "PixelYDimension": "2984",
  "DateTimeOriginal": "2014:01:19 15:44:34",
  "FocalPlaneYResolution": "5306.53",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "72",
  "Content-Length": "4329768",
  "TimeCreated": "154434",
  "DateCreated": "20140119",
  "DPIHeight": "72",
  "XResolution": "72",
  "Model": "Canon EOS 50D",
  "PixelWidth": "4476",
  "PixelHeight": "2984"
},{
  "PixelXDimension": "3600",
  "DateTimeDigitized": "2015:07:20 13:25:44",
  "PixelYDimension": "2400",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "300",
  "Content-Length": "7070802",
  "DigitalCreationDate": "20150720",
  "DigitalCreationTime": "132544-0700",
  "ColorModel": "RGB",
  "DPIHeight": "300",
  "XResolution": "300",
  "PixelWidth": "3600",
  "PixelHeight": "2400"
},{
  "PixelYDimension": "2322",
  "DateTimeOriginal": "2014:01:04 08:59:31",
  "FocalLength": "4.2",
  "MeteringMode": "2",
  "Flash": "0",
  "PixelXDimension": "4128",
  "ShutterSpeedValue": "5.91",
  "ExposureBiasValue": "0",
  "ExposureProgram": "2",
  "DateTimeDigitized": "2014:01:04 08:59:31",
  "ExposureTime": "0.0166667",
  "Output": "",
  "Content-Type": "image/jpeg",
  "DPIWidth": "72",
  "Content-Length": "2177174",
  "Depth": "8",
  "ColorModel": "RGB",
  "DPIHeight": "72",
  "XResolution": "72",
  "Model": "GT-I9500",
  "PixelWidth": "4128",
  "PixelHeight": "2322"
},{
  "FocalPlaneXResolution": "3849.21",
  "WhiteBalance": "1",
  "CustomRendered": "0",
  "ExposureProgram": "1",
  "FlashCompensation": "0",
  "SubsecTimeDigitized": "35",
  "ExposureTime": "0.01",
  "ImageNumber": "0",
  "BodySerialNumber": "2831516884",
  "SubsecTimeOriginal": "35",
  "PixelXDimension": "3600",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2014:05:18 20:34:28",
  "ExposureMode": "1",
  "ISOSpeedRatings": "250",
  "FocalLength": "15",
  "SceneCaptureType": "0",
  "FocalPlaneResolutionUnit": "2",
  "DateTimeOriginal": "2014:05:18 20:34:28",
  "ShutterSpeedValue": "6.64386",
  "MeteringMode": "5",
  "Flash": "16",
  "PixelYDimension": "2400",
  "Firmware": "2.1.2",
  "FocalPlaneYResolution": "3908.14",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "72",
  "Content-Length": "5935233",
  "TimeCreated": "203428",
  "DateCreated": "20140518",
  "DPIHeight": "72",
  "XResolution": "72",
  "Model": "Canon EOS 5D Mark II",
  "PixelWidth": "3600",
  "PixelHeight": "2400"
},{
  "FocalPlaneXResolution": "3818.78",
  "WhiteBalance": "0",
  "CustomRendered": "0",
  "ExposureProgram": "1",
  "FlashCompensation": "0",
  "SubsecTimeDigitized": "00",
  "ExposureTime": "0.00625",
  "ImageNumber": "0",
  "FocalLength": "50",
  "ExposureBiasValue": "0",
  "DateTimeDigitized": "2013:07:03 16:04:03",
  "ExposureMode": "1",
  "ISOSpeedRatings": "320",
  "SensitivityType": "2",
  "SceneCaptureType": "0",
  "FocalPlaneResolutionUnit": "2",
  "MeteringMode": "3",
  "Firmware": "1.0.5",
  "DateTimeOriginal": "2013:07:03 16:04:03",
  "Flash": "16",
  "ShutterSpeedValue": "7.32193",
  "SubsecTimeOriginal": "00",
  "FocalPlaneYResolution": "3872.27",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "240",
  "Content-Length": "2193473",
  "TimeCreated": "160403",
  "DateCreated": "20130703",
  "DPIHeight": "240",
  "Model": "Canon EOS 60D",
  "XResolution": "240",
  "PixelWidth": "3456",
  "PixelHeight": "2304"
},{
  "ExposureProgram": "1",
  "DateTimeOriginal": "2010:11:06 11:03:49",
  "FocalLength": "75",
  "Firmware": "P40+-M, Firmware: Main=5.1.2, Boot=2.3, FPGA=1.2.4, CPLD=5.0.1, PAVR=1.0.3, UIFC=1.0.1, TGEN=1.0",
  "ExposureTime": "0.00800002",
  "ISOSpeedRatings": "50",
  "PixelXDimension": "2455",
  "DateTimeDigitized": "2010:11:06 11:03:49",
  "ExposureBiasValue": "0",
  "PixelYDimension": "3600",
  "ShutterSpeedValue": "6.96578",
  "ColorModel": "RGB",
  "Depth": "8",
  "Content-Type": "image/jpeg",
  "Output": "",
  "DPIWidth": "72",
  "Content-Length": "827801",
  "TimeCreated": "110349+0100",
  "DateCreated": "20101106",
  "DPIHeight": "72",
  "XResolution": "72",
  "Model": "P40+",
  "PixelWidth": "2455",
  "PixelHeight": "3600"
}]
);
