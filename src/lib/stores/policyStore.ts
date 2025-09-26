import { writable, type Writable } from 'svelte/store';

interface Product {
    company: string;
    name: string;
    goods?: string; // formerly medical, now optional
    liability?: string; // formerly cancellation, now optional
    vehicle?: string; // formerly luggage, now optional
    other: string;
    discount: string;
    inclusions: string;
    price: string;
    contents?: string; // for home insurance
}

interface PolicyCategory {
    title: string;
    fields: string[];
    products: Product[];
}

interface SamplePolicies {
    [key: string]: PolicyCategory;
}

const samplePolicies: SamplePolicies = {
    'car-insurance': {
        'title': 'Car',
        'fields': [
            'company',
            'name',
            'goods',
            'liability',
            'vehicle',
            'other',
            'discount',
            'inclusions',
            'price'
        ],
        'products': [
            // QBE Options
            {
                company: 'QBE',
                name: 'Basic Protection',
                goods: '$1M',
                liability: '$5000',
                vehicle: '$2000',
                other: 'Third Party Only',
                discount: '10% off',
                inclusions: 'Basic coverage',
                price: '$89'
            },
            {
                company: 'QBE',
                name: 'Comprehensive Plus',
                goods: '$3M',
                liability: '$10000',
                vehicle: '$5000',
                other: 'Roadside Assist',
                discount: '15% off',
                inclusions: 'Enhanced coverage',
                price: '$159'
            },
            {
                company: 'QBE',
                name: 'Premium Elite',
                goods: '$5M',
                liability: '$15000',
                vehicle: '$8000',
                other: 'Full Coverage',
                discount: '20% off',
                inclusions: 'Premium coverage',
                price: '$229'
            },
            
            // RACQ Options
            {
                company: 'RACQ',
                name: 'Essential Care',
                goods: '$2M',
                liability: '$8000',
                vehicle: '$3000',
                other: 'Basic Roadside',
                discount: '15% off',
                inclusions: 'Basic coverage',
                price: '$99'
            },
            {
                company: 'RACQ',
                name: 'Comprehensive Care',
                goods: '$5M',
                liability: '$10000',
                vehicle: '$5000',
                other: 'Premium Roadside',
                discount: '20% off',
                inclusions: 'Full coverage',
                price: '$199'
            },
            {
                company: 'RACQ',
                name: 'Ultimate Care',
                goods: '$10M',
                liability: '$20000',
                vehicle: '$10000',
                other: 'Premium Plus',
                discount: '25% off',
                inclusions: 'Ultimate coverage',
                price: '$299'
            },

            // CLEAR Options
            {
                company: 'CLEAR',
                name: 'Basic Third Party',
                goods: '$500K',
                liability: '$2000',
                vehicle: '$1000',
                other: 'Third Party Only',
                discount: '10% off',
                inclusions: 'Third Party',
                price: '$79'
            },
            {
                company: 'CLEAR',
                name: 'Enhanced Protection',
                goods: '$2M',
                liability: '$5000',
                vehicle: '$3000',
                other: 'Fire & Theft',
                discount: '15% off',
                inclusions: 'Enhanced Third Party',
                price: '$149'
            },
            {
                company: 'CLEAR',
                name: 'Premium Complete',
                goods: '$5M',
                liability: '$8000',
                vehicle: '$5000',
                other: 'Full Coverage',
                discount: '20% off',
                inclusions: 'Comprehensive',
                price: '$219'
            },

            // HCI Options
            {
                company: 'HCI',
                name: 'Basic Shield',
                goods: '$1M',
                liability: '$3000',
                vehicle: '$2000',
                other: 'Basic Cover',
                discount: '15% off',
                inclusions: 'Third Party',
                price: '$85'
            },
            {
                company: 'HCI',
                name: 'Advanced Shield',
                goods: '$3M',
                liability: '$7000',
                vehicle: '$4000',
                other: 'Enhanced Cover',
                discount: '20% off',
                inclusions: 'Enhanced coverage',
                price: '$169'
            },
            {
                company: 'HCI',
                name: 'Ultimate Shield',
                goods: '$7M',
                liability: '$12000',
                vehicle: '$7000',
                other: 'Premium Cover',
                discount: '25% off',
                inclusions: 'Premium coverage',
                price: '$249'
            },
        ],
    },
    'boat-insurance': {
        'title': 'Boat',
        'fields': [
            'company',
            'name',
            'goods',
            'liability',
            'vehicle',
            'other',
            'discount',
            'inclusions',
            'price'
        ],
       'products': [
            // QBE Boat Options
            {
                company: 'QBE',
                name: 'Basic Marine',
                goods: '$500K',
                liability: '$3000',
                vehicle: '$1000',
                other: 'Third Party Only',
                discount: '10% off',
                inclusions: 'Basic coverage',
                price: '$79'
            },
            {
                company: 'QBE',
                name: 'Marine Plus',
                goods: '$2M', // formerly medical
                liability: '$7000', // formerly cancellation
                vehicle: '$3000', // formerly luggage
                other: 'Water Rescue',
                discount: '15% off',
                inclusions: 'Enhanced coverage',
                price: '$149'
            },
            {
                company: 'QBE',
                name: 'Premium Marine',
                goods: '$5M', // formerly medical
                liability: '$10000', // formerly cancellation
                vehicle: '$5000', // formerly luggage
                other: 'Full Coverage',
                discount: '20% off',
                inclusions: 'Premium coverage',
                price: '$249'
            },

            // RACQ Boat Options
            {
                company: 'RACQ',
                name: 'Basic Boating',
                goods: '$1M', // formerly medical
                liability: '$5000', // formerly cancellation
                vehicle: '$2000', // formerly luggage
                other: 'Basic Coverage',
                discount: '15% off',
                inclusions: 'Basic coverage',
                price: '$89'
            },
            {
                company: 'RACQ',
                name: 'Advanced Boating',
                goods: '$3M', // formerly medical
                liability: '$8000', // formerly cancellation
                vehicle: '$4000', // formerly luggage
                other: 'Enhanced Coverage',
                discount: '20% off',
                inclusions: 'Enhanced coverage',
                price: '$179'
            },
            {
                company: 'RACQ',
                name: 'Premium Yacht',
                goods: '$10M', // formerly medical
                liability: '$15000', // formerly cancellation
                vehicle: '$8000', // formerly luggage
                other: 'Premium Coverage',
                discount: '25% off',
                inclusions: 'Premium coverage',
                price: '$299'
            },
        ],
    },
    'home-insurance': {
        'title': 'Home',
        'fields': [
            'company',
            'name',
            'contents',
            'other',
            'discount',
            'inclusions',
            'price'
        ],
        'products': [
            // QBE Home Options
            {
                company: 'QBE',
                name: 'Basic Home',
                contents: '$100K',
                other: 'Basic Coverage',
                discount: '10% off',
                inclusions: 'Basic coverage',
                price: '$89'
            },
            {
                company: 'QBE',
                name: 'Advanced Home',
                contents: '$200K',
                other: 'Enhanced Coverage',
                discount: '15% off',
                inclusions: 'Enhanced coverage',
                price: '$179'
            },
            {
                company: 'QBE',
                name: 'Premium Home',
                contents: '$500K',
                other: 'Premium Coverage',
                discount: '20% off',
                inclusions: 'Premium coverage',
                price: '$299'
            },
        ],
    },
    'motorcycle-insurance': {
        'title': 'Motorcycle',
        'fields': [
            'company',
            'name',
            'goods', // formerly medical
            'liability', // formerly cancellation
            'vehicle', // formerly luggage
            'other',
            'discount',
            'inclusions',
            'price'
        ],
        'products': [
            // QBE Motorcycle Options
            {
                company: 'QBE',
                name: 'Basic Protection',
                goods: '$1M', // formerly medical
                liability: '$3000', // formerly cancellation
                vehicle: '$2000', // formerly luggage
                other: 'Third Party Only',
                discount: '10% off',
                inclusions: 'Basic coverage',
                price: '$89'
            },
            {
                company: 'QBE',
                name: 'Advanced Protection',
                goods: '$3M', 
                liability: '$7000',
                vehicle: '$4000',
                other: 'Enhanced Cover',
                discount: '15% off',
                inclusions: 'Enhanced coverage',
                price: '$169'
            },
            {
                company: 'QBE',
                name: 'Premium Protection',
                goods: '$7M',
                liability: '$12000', 
                vehicle: '$7000',
                other: 'Premium Cover',
                discount: '20% off',
                inclusions: 'Premium coverage',
                price: '$249'
            },
            // RACQ Motorcycle Options
            {
                company: 'RACQ',
                name: 'Basic Protection',
                goods: '$1M',
                liability: '$3000',
                vehicle: '$2000',
                other: 'Third Party Only',
                discount: '10% off',
                inclusions: 'Basic coverage',
                price: '$89'
            },
            {
                company: 'RACQ',
                name: 'Advanced Protection',
                goods: '$3M',
                liability: '$7000',
                vehicle: '$4000',
                other: 'Enhanced Cover',
                discount: '15% off',
                inclusions: 'Enhanced coverage',
                price: '$169'
            },
            {
                company: 'RACQ',
                name: 'Premium Protection',
                goods: '$7M',
                liability: '$12000',
                vehicle: '$7000',
                other: 'Premium Cover',
                discount: '20% off',
                inclusions: 'Premium coverage',
                price: '$249'
            },
            // CLEAR Motorcycle Options
            {
                company: 'CLEAR',
                name: 'Basic Protection',
                goods: '$1M',
                liability: '$3000',
                vehicle: '$2000',
                other: 'Third Party Only',
                discount: '10% off',
                inclusions: 'Basic coverage',
                price: '$89'
            },
            {
                company: 'CLEAR',
                name: 'Advanced Protection',
                goods: '$3M',
                liability: '$7000',
                vehicle: '$4000',
                other: 'Enhanced Cover',
                discount: '15% off',
                inclusions: 'Enhanced coverage',
                price: '$169'
            },
            {
                company: 'CLEAR',
                name: 'Premium Protection',
                goods: '$7M',
                liability: '$12000',
                vehicle: '$7000',
                other: 'Premium Cover',
                discount: '20% off',
                inclusions: 'Premium coverage',
                price: '$249'
            },
            // HCI Motorcycle Options
            {
                company: 'HCI',
                name: 'Basic Protection',
                goods: '$1M',
                liability: '$3000',
                vehicle: '$2000',
                other: 'Third Party Only',
                discount: '10% off',
                inclusions: 'Basic coverage',
                price: '$89'
            },
            {
                company: 'HCI',
                name: 'Advanced Protection',
                goods: '$3M',
                liability: '$7000',
                vehicle: '$4000',
                other: 'Enhanced Cover',
                discount: '15% off',
                inclusions: 'Enhanced coverage',
                price: '$169'
            },
        ],
    },
};

export const policies: Writable<SamplePolicies> = writable(samplePolicies);

// Function to get a specific policy by type
export function getPolicyByType(type: string): PolicyCategory | undefined {
  return samplePolicies[type];
} 