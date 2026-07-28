export interface SurepassBaseResponse {
    success: boolean;
    status_code: number;
    message: string | null;
}

export interface SurepassRcResponse extends SurepassBaseResponse {
    data: {
        client_id: string;
        rc_number: string;
        registration_date: string;
        owner_name: string;
        father_name: string;
        present_address: string;
        permanent_address: string;
        mobile_number: string;
        vehicle_category: string;
        vehicle_chasi_number: string;
        vehicle_engine_number: string;
        maker_description: string;
        maker_model: string;
        body_type: string;
        fuel_type: string;
        color: string;
        norms_type: string;
        fit_up_to: string;
        financer: string;
        financed: boolean;
        insurance_company: string;
        insurance_policy_number: string;
        insurance_upto: string;
        manufacturing_date: string;
        manufacturing_date_formatted: string;
        registered_at: string;
        latest_by: string;
        less_info: boolean;
        tax_upto: string | null;
        tax_paid_upto: string;
        cubic_capacity: string;
        vehicle_gross_weight: string;
        no_cylinders: string;
        seat_capacity: string;
        sleeper_capacity: string | null;
        standing_capacity: string | null;
        wheelbase: string;
        unladen_weight: string;
        vehicle_category_description: string;
        pucc_number: string;
        pucc_upto: string | null;
        permit_number: string;
        permit_issue_date: string | null;
        permit_valid_from: string | null;
        permit_valid_upto: string;
        permit_type: string;
        national_permit_number: string | null;
        national_permit_upto: string | null;
        national_permit_issued_by: string | null;
        non_use_status: string | null;
        non_use_from: string | null;
        non_use_to: string | null;
        blacklist_status: string | null;
        noc_details: string | null;
        owner_number: string;
        rc_status: string | null;
        masked_name: boolean;
        challan_details: string | null;
        variant: string | null;
    };
}

export interface SurepassChallanRequest {
    rc_number: string;
    chassis_number: string;
    engine_number: string;
    state_only?: boolean;
    state_portal?: string[];
}

export interface SurepassChallan {
    number: number;
    challan_number: string;
    offense_details: string;
    challan_place: string | null;
    challan_date: string;
    state: string;
    rto: string | null;
    upstream_code: string;
    accused_name: string;
    amount: number;
    challan_status: string | null;
    court_challan: boolean | null;
}

export interface SurepassChallanDetails {
    challans: SurepassChallan[];
    blacklist: any[];
}

export interface SurepassChallanDetailsResponse extends SurepassBaseResponse {
    data: {
        client_id: string;
        challan_details: SurepassChallanDetails;
    };
}

export interface SurepassChallanAdvancedRequest {
    rc_number: string;
}

export interface SurepassOffenseDetail {
    offense_name: string;
}

export interface SurepassChallanAdvanced {
    number: number;
    challan_number: string;
    offense_details: string;
    challan_place: string | null;
    offense_details_list: SurepassOffenseDetail[];
    challan_date: string;
    challan_date_time: string;
    state: string;
    rto: string | null;
    accused_name: string;
    amount: string;
    challan_status: string;
    court_challan: boolean;
    court_name: string | null;
    upstream_code: string;
}

export interface SurepassChallanAdvancedResponse extends SurepassBaseResponse {
    data: {
        client_id: string;
        rc_number: string;
        challan_details: SurepassChallanAdvanced[];
    };
}

export interface SurepassFastagRequest {
    rc_number: string;
}

export interface SurepassFastagData {
    client_id: string;
    rc_number: string;
    bank_name: string;
    tag_id: string;
    status: string;
}

export interface SurepassFastagResponse extends SurepassBaseResponse {
    data: SurepassFastagData;
}

export interface SurepassFastagV2Request {
    rc_number: string;
}

export interface SurepassFastagTransaction {
    lane_direction: string;
    transaction_date_time: string;
    seq_no: string;
    toll_plaza_geocode: string;
    toll_plaza_name: string;
    vehicle_type: string;
}

export interface SurepassFastagV2Data {
    client_id: string;
    rc_number: string;
    bank_name: string;
    tag_id: string;
    transactions: SurepassFastagTransaction[];
    status: string;
}

export interface SurepassFastagV2Response extends SurepassBaseResponse {
    data: SurepassFastagV2Data;
}

export interface SurepassFastagBalanceRequest {
    rc_number: string;
    provider_name: string;
}

export interface SurepassFastagBalanceData {
    client_id: string;
    rc_number: string;
    provider_name: string;
    provider_code: string;
    customer_name: string;
    available_recharge_limit: string;
    available_balance: string;
    tag_status: string;
    vehicle_class: string;
    vehicle_class_desc: string;
    model_name: string | null;
}

export interface SurepassFastagBalanceResponse extends SurepassBaseResponse {
    data: SurepassFastagBalanceData;
}

export interface SurepassRcV2Request {
    id_number: string;
    enrich?: boolean;
}

export interface SurepassRcV2Metadata {
    masked_chassis: boolean;
    masked_engine: boolean;
    masked_owner_name: boolean;
}

export interface SurepassRcV2Data {
    client_id: string;
    rc_number: string;
    fit_up_to: string;
    registration_date: string;
    owner_name: string;
    father_name: string;
    present_address: string;
    permanent_address: string;
    mobile_number: string;
    vehicle_category: string;
    vehicle_chasi_number: string;
    vehicle_engine_number: string;
    maker_description: string;
    maker_model: string;
    body_type: string;
    fuel_type: string;
    color: string;
    norms_type: string;
    financer: string;
    financed: boolean;
    insurance_company: string;
    insurance_policy_number: string;
    insurance_upto: string;
    manufacturing_date: string;
    manufacturing_date_formatted: string;
    registered_at: string;
    latest_by: string;
    less_info: boolean;
    tax_upto: string | null;
    tax_paid_upto: string;
    cubic_capacity: string;
    vehicle_gross_weight: string;
    no_cylinders: string;
    seat_capacity: string;
    sleeper_capacity: string | null;
    standing_capacity: string | null;
    wheelbase: string | null;
    unladen_weight: string;
    vehicle_category_description: string;
    pucc_number: string;
    pucc_upto: string | null;
    permit_number: string;
    permit_issue_date: string | null;
    permit_valid_from: string | null;
    permit_valid_upto: string | null;
    permit_type: string;
    national_permit_number: string;
    national_permit_upto: string | null;
    national_permit_issued_by: string | null;
    non_use_status: string | null;
    non_use_from: string | null;
    non_use_to: string | null;
    blacklist_status: string;
    noc_details: string;
    owner_number: string;
    rc_status: string | null;
    rto_code: string | null;
    response_metadata: SurepassRcV2Metadata;
}

export interface SurepassRcV2Response extends SurepassBaseResponse {
    data: SurepassRcV2Data;
}




