import {IconFileSearch} from '@tabler/icons';

const icons = { IconFileSearch };

const mapView = {
    id: 'mapViewGroup',
    title: '지도 뷰',
    type: 'group',
    children: [
        {
            id: 'mapView',
            title: '지도 보기',
            type: 'item',
            url: '/map-view',
            icon: icons.IconFileSearch,
            breadcrumbs: false
        }
    ]
};

export default mapView;