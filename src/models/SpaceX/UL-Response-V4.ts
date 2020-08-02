// Generated by https://quicktype.io

export interface ULResponseV4 {
    fairings:              Fairings;
    links:                 Links;
    static_fire_date_utc:  null | string;
    static_fire_date_unix: number | null;
    tbd:                   boolean;
    net:                   boolean;
    window:                number | null;
    rocket:                string;
    success:               null;
    failures:              any[];
    details:               null | string;
    crew:                  any[];
    ships:                 string[];
    capsules:              any[];
    payloads:              string[];
    launchpad:             string;
    auto_update:           boolean;
    flight_number:         number;
    name:                  string;
    date_utc:              string;
    date_unix:             number;
    date_local:            string;
    date_precision:        string;
    upcoming:              boolean;
    cores:                 Core[];
    id:                    string;
}

export interface Core {
    core:            null | string;
    flight:          number | null;
    gridfins:        boolean | null;
    legs:            boolean | null;
    reused:          boolean;
    landing_attempt: boolean | null;
    landing_success: null;
    landing_type:    null | string;
    landpad:         null | string;
}

export interface Fairings {
    reused:           null;
    recovery_attempt: boolean | null;
    recovered:        null;
    ships:            string[];
}

export interface Links {
    patch:      Patch;
    reddit:     Reddit;
    flickr:     Flickr;
    presskit:   null;
    webcast:    null | string;
    youtube_id: null | string;
    article:    null;
    wikipedia:  null | string;
}

export interface Flickr {
    small:    any[];
    original: any[];
}

export interface Patch {
    small: string;
    large: string;
}

export interface Reddit {
    campaign: null | string;
    launch:   null | string;
    media:    null | string;
    recovery: null;
}
