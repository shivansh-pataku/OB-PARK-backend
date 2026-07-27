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