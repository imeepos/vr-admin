import { Link } from 'react-router-dom';
import { useModels } from '@/hooks/useModels';
import { useConfirmDialog } from '@/hooks/useConfirmDialog';
import { useToast } from '@/hooks/useToast';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';
import type { Model } from '@/generated/graphql';

export function ModelListPage() {
  const { models, isLoading, error, deleteModel, isDeleting } = useModels();
  const { isOpen, options, confirm, handleClose, handleConfirm } =
    useConfirmDialog();
  const { showSuccess, showError } = useToast();

  const handleDelete = async (id: string) => {
    const confirmed = await confirm({
      title: '删除模型',
      message: '确定要删除这个模型吗？此操作不可撤销。',
      confirmText: '删除',
      cancelText: '取消',
      type: 'danger',
    });

    if (confirmed) {
      try {
        await deleteModel(id);
        showSuccess('模型删除成功');
      } catch (err) {
        console.error('Delete failed:', err);
        showError('删除失败，请稍后重试');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        加载模型列表失败：{error.message}
      </div>
    );
  }

  return (
    <>
      <ConfirmDialog
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={options.title}
        message={options.message}
        confirmText={options.confirmText}
        cancelText={options.cancelText}
        type={options.type}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">模型管理</h1>
            <p className="mt-2 text-sm text-gray-700">
              管理您的 VR 模型，包括背景图片、视频和相关配置。
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link
              to="/dashboard/models/create"
              className="btn btn-primary px-2 py-2"
            >
              <PlusIcon className="w-4 h-4 mr-2" />
              创建模型
            </Link>
          </div>
        </div>

        <div className="mt-8 flow-root">
          {models.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                还没有创建任何模型。
              </div>
              <Link
                to="/dashboard/models/create"
                className="btn btn-primary p-2"
              >
                <PlusIcon className="w-4 h-4 mr-2" />
                创建第一个模型
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        标题
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        UUID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        描述
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        媒体文件
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        创建时间
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                      >
                        <span className="sr-only">操作</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {models.map((model: Model) => (
                      <tr key={model.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {model.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                            {model.uuid}
                          </code>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          <div className="max-w-xs truncate">
                            {model.description || '-'}
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          <div className="flex space-x-2">
                            {model.backgroundImage && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                图片
                              </span>
                            )}
                            {model.backgroundVideo && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                视频
                              </span>
                            )}
                            {!model.backgroundImage &&
                              !model.backgroundVideo && (
                                <span className="text-gray-400">—</span>
                              )}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {new Date(model.createdAt).toLocaleDateString(
                            'zh-CN',
                          )}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <div className="flex justify-end space-x-2">
                            <Link
                              to={`/dashboard/models/${model.id}/edit`}
                              className="text-primary-600 hover:text-primary-900"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(model.id)}
                              disabled={isDeleting}
                              className="text-red-600 hover:text-red-900 disabled:opacity-50"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
