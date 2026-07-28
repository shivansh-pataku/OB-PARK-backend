import { ApiProperty } from '@nestjs/swagger';

export class RcV2MetadataDto {
    @ApiProperty({ example: true })
    maskedChassis: boolean;

    @ApiProperty({ example: true })
    maskedEngine: boolean;

    @ApiProperty({ example: true })
    maskedOwnerName: boolean;
}

export class RcV2ResponseDto {
    @ApiProperty({ example: 'rc_v2_tzomotgoEEkXGfksyLav' })
    clientId: string;

    @ApiProperty({ example: 'DL08AB1234' })
    rcNumber: string;

    @ApiProperty({ example: '2032-12-15' })
    fitnessValidTill: string;

    @ApiProperty({ example: '2018-01-20' })
    registrationDate: string;

    @ApiProperty({ example: 'R***N K****R' })
    ownerName: string;

    @ApiProperty({ example: '' })
    fatherName: string;

    @ApiProperty({ example: 'New Delhi, 110034' })
    presentAddress: string;

    @ApiProperty({ example: 'New Delhi, 110034' })
    permanentAddress: string;

    @ApiProperty({ example: '' })
    mobileNumber: string;

    @ApiProperty({ example: '2WN' })
    vehicleCategory: string;

    @ApiProperty({ example: 'ME3XYZAB1JK456789' })
    chassisNumber: string;

    @ApiProperty({ example: 'XYZAB1JK0*****' })
    engineNumber: string;

    @ApiProperty({ example: 'HONDA MOTORCYCLE & SCOOTER INDIA PVT LTD' })
    maker: string;

    @ApiProperty({ example: 'ACTIVA 5G' })
    model: string;

    @ApiProperty({ example: 'SCOOTER' })
    bodyType: string;

    @ApiProperty({ example: 'PETROL' })
    fuelType: string;

    @ApiProperty({ example: 'BLACK' })
    color: string;

    @ApiProperty({ example: 'BS4' })
    normsType: string;

    @ApiProperty({ example: '' })
    financer: string;

    @ApiProperty({ example: false })
    financed: boolean;

    @ApiProperty({ example: 'ICICI Lombard General Insurance Co. Ltd.' })
    insuranceCompany: string;

    @ApiProperty({ example: 'IC1234567890' })
    insurancePolicyNumber: string;

    @ApiProperty({ example: '2025-12-20' })
    insuranceValidTill: string;

    @ApiProperty({ example: '12/2017' })
    manufacturingDate: string;

    @ApiProperty({ example: '2017-12' })
    manufacturingDateFormatted: string;

    @ApiProperty({ example: 'DELHI, Delhi' })
    registeredAt: string;

    @ApiProperty({ example: '2025-08-29' })
    latestBy: string;

    @ApiProperty({ example: true })
    lessInfo: boolean;

    @ApiProperty({ example: '2032-12-15', nullable: true })
    taxValidTill: string | null;

    @ApiProperty({ example: '2032-12-15' })
    taxPaidValidTill: string;

    @ApiProperty({ example: '109.19' })
    cubicCapacity: string;

    @ApiProperty({ example: '0' })
    vehicleGrossWeight: string;

    @ApiProperty({ example: '1' })
    noCylinders: string;

    @ApiProperty({ example: '2' })
    seatCapacity: string;

    @ApiProperty({ example: null, nullable: true })
    sleeperCapacity: string | null;

    @ApiProperty({ example: null, nullable: true })
    standingCapacity: string | null;

    @ApiProperty({ example: null, nullable: true })
    wheelbase: string | null;

    @ApiProperty({ example: '109' })
    unladenWeight: string;

    @ApiProperty({ example: 'Scooter(2WN)' })
    vehicleCategoryDescription: string;

    @ApiProperty({ example: 'DL009876543210' })
    puccNumber: string;

    @ApiProperty({ example: '2025-11-25', nullable: true })
    puccValidTill: string | null;

    @ApiProperty({ example: '' })
    permitNumber: string;

    @ApiProperty({ example: null, nullable: true })
    permitIssueDate: string | null;

    @ApiProperty({ example: null, nullable: true })
    permitValidFrom: string | null;

    @ApiProperty({ example: null, nullable: true })
    permitValidTill: string | null;

    @ApiProperty({ example: '' })
    permitType: string;

    @ApiProperty({ example: '' })
    nationalPermitNumber: string;

    @ApiProperty({ example: null, nullable: true })
    nationalPermitValidTill: string | null;

    @ApiProperty({ example: null, nullable: true })
    nationalPermitIssuedBy: string | null;

    @ApiProperty({ example: null, nullable: true })
    nonUseStatus: string | null;

    @ApiProperty({ example: null, nullable: true })
    nonUseFrom: string | null;

    @ApiProperty({ example: null, nullable: true })
    nonUseTo: string | null;

    @ApiProperty({ example: '' })
    blacklistStatus: string;

    @ApiProperty({ example: '' })
    nocDetails: string;

    @ApiProperty({ example: '1' })
    ownerNumber: string;

    @ApiProperty({ example: null, nullable: true })
    rcStatus: string | null;

    @ApiProperty({ example: null, nullable: true })
    rtoCode: string | null;

    @ApiProperty({ type: RcV2MetadataDto })
    responseMetadata: RcV2MetadataDto;
}
